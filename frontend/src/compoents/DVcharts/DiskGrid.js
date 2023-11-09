import * as echarts from "echarts";
import esg from "./ESGDiskGraph.json";
export const gridChart = () => {
  var chartDom = document.getElementById("main");
  chartDom.style.width = "100%"; // Set to desired width
  chartDom.style.height = "370%"; // Set to desired height
  // chartDom.style.position = "absolute";
  // chartDom.style.top = "50%";
  // chartDom.style.left = "50%";
  // chartDom.style.transform = "translate(-50%, -50%)";
  var myChart = echarts.init(chartDom);
  var option;

  const categoryColors = {
    Environment: "rgb(63, 144, 76)",
    Social: "rgb(176, 49, 52)",
    Governance: "rgb(44, 52, 143)",
  };

  esg.forEach((category) => {
    category.itemStyle = {
      borderColor: categoryColors[category.name],
    };
  });

  myChart.showLoading();
  setTimeout(() => {
    myChart.hideLoading();
    function getLevelOption() {
      return [
        {
          itemStyle: {
            borderColor: "#777",
            borderWidth: 0,
            gapWidth: 1,
          },
          upperLabel: {
            show: false,
          },
        },
        {
          itemStyle: {
            borderColor: "white",
            borderWidth: 5,
            gapWidth: 1,
          },
        },
        {
          colorSaturation: [0.35, 0.5],
          itemStyle: {
            borderWidth: 5,
            gapWidth: 1,
            borderColorSaturation: 0.6,
          },
        },
      ];
    }
    myChart.setOption(
      (option = {
        tooltip: {
          formatter: function (info) {
            var value = info.value;
            var data = info.data;
            console.log(data.data);
            var treePathInfo = info.treePathInfo;
            var treePath = [];
            for (var i = 1; i < treePathInfo.length; i++) {
              treePath.push(treePathInfo[i].name);
            }

            return [
              '<div class="tooltip-title">' +
                echarts.format.encodeHTML(treePath.join("-")) +
                "</div>",
              "Source of ESG: " + echarts.format.addCommas(data.data),
            ].join("");
          },
        },
        series: [
          {
            name: "ESG SDG",
            type: "treemap",
            visibleMin: 300,
            label: {
              show: true,
              formatter: "{b}",
              backgroundColor: "transparent", // Set background color to transparent
              borderColor: "transparent", // Set border color to transparent
              padding: 0, // Optional: Adjust padding if needed
            },
            upperLabel: {
              show: true,
              height: 30,
              textStyle: {
                color: "#FFFFFF", // Color of the label text
                fontFamily: "Arial", // Font family of the label text
                fontSize: 15, // Font size of the label text
                // fontWeight: "bold", // Font weight of the label text
                // backgroundColor: "#333", // Optional: background color of the label
                padding: [2, 4], // Optional: padding around the label text
                // borderRadius: 4, // Optional: rounded corners for the label background
              },
            },

            itemStyle: {
              borderColor: "black",
              width: "100%",
            },
            levels: getLevelOption(),
            data: esg,
          },
        ],
      })
    );
    myChart.resize();
  }, 1000);
};
