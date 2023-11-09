import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import data from "./aqi-beijing.json";

function LineChartComponent() {
  const chartDom = useRef(null);
  const myChart = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  //source should be changed with Redux storage on the main application
  const [source, setSource] = useState(
    "Apple Shares 2023 Environmental Progress Report Ahead of Earth Day MacRumor"
  );
  const [newsSource, setNewsSource] = useState(
    "Apple Shares 2023 Environmental Progress Report Ahead of Earth Day MacRumor"
  );
  const [modalContent, setModalContent] = useState(null);

  const calculateStartDate = (window) => {
    const today = new Date(data[data.length - 1][0]);
    switch (window) {
      case "5d":
        today.setDate(today.getDate() - 5);
        setSource("BBC AP News at November 2022, 5 day window");
        break;
      case "5w":
        for (let i = 0; i < 5; i++) {
          today.setDate(today.getDate() - 7);
          setSource("BBC AP News at November 2022, 5 week window");
        }
        break;
      case "5m":
        today.setMonth(today.getMonth() - 5);
        setSource("BBC AP News at November 2022, 5 month window");
        break;
      case "5y":
        today.setFullYear(today.getFullYear() - 5);
        setSource("BBC AP News at November 2022, 5 year window");
        break;
      default:
        break;
    }
    return today.toISOString().split("T")[0];
  };

  const setChartOption = (window) => {
    const startDate = calculateStartDate(window);
    const totalDays =
      (new Date(data[data.length - 1][0]) - new Date(data[0][0])) /
      (24 * 60 * 60 * 1000);
    const daysToShow =
      (new Date(data[data.length - 1][0]) - new Date(startDate)) /
      (24 * 60 * 60 * 1000);

    const startPercentage = ((totalDays - daysToShow) / totalDays) * 100;
    const endPercentage = 100;
    let option = {
      title: {
        text: "",
        left: "1%",
      },
      tooltip: {
        trigger: "axis",
        show: true,
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
        padding: 10,
        backgroundColor: "rgba(255, 255, 255, 0.9)", // Lighter background
        borderColor: "black", // Border color
        borderWidth: 2, // Border width
        borderRadius: 8, // Rounded edges
        shadowBlur: 5,
        shadowColor: "black",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        textStyle: {
          color: "#333", // Darker text color
        },
        formatter: function (params) {
          let param = params[0];
          let currentIndex = param.dataIndex;
          let currentValue = param.value;
          let prevValue = currentIndex > 0 ? data[currentIndex - 1][1] : null;

          let percentageChange =
            prevValue !== null
              ? ((currentValue - prevValue) / prevValue) * 100
              : null;
          let percentageChangeColor = percentageChange > 0 ? "green" : "red";

          return `
                <div style="border: 2px solid #f50000; padding: 10px; border-radius: 5px; background-color: black; ">
                    <h4 style="color: #ffffff; margin: 0;">${param.name}</h4>
                    <h4 style="color: ${percentageChangeColor}; margin: 0;">${percentageChange.toFixed(
            2
          )}%</h4>
                    <p style="color: #ffffff; margin: 5px 0;">Value: ${
                      param.value
                    }</p>
                    <p style="width: 175px; height: auto; flex-shrink: 0; margin: 0; border-radius: 5px; border: 0.5px solid #65656D; background: var(--main-black-background, #171719);
                    color: var(--big-title-color, #CECED2); padding: 10px; font-family: Open Sans; font-size: 13px; font-style: normal; font-weight: 600; line-height: 110%;">
                    <span style="word-wrap: break-word; display: inline; white-space: pre-wrap;text-align: justify">${newsSource}</span>
                    </p>


                </div>
            `;
        },

        extraCssText: `
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        `,
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "10%",
      },
      xAxis: {
        data: data.map((item) => item[0]),
      },
      yAxis: {},
      toolbox: {
        right: 10,
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          restore: {},
          saveAsImage: {},
        },
      },
      dataZoom: [
        {
          type: "slider",
          start: startPercentage,
          end: endPercentage,
          readOnly: true,
        },
        {
          type: "inside",
          start: startPercentage,
          end: endPercentage,
        },
      ],
      visualMap: {
        show: false,
        top: 50,
        right: 10,
        pieces: [
          {
            gt: 0,
            lte: 50,
            color: "#f50000",
          },
          {
            gt: 50,
            lte: 60,
            color: "#5cc38a",
          },
          {
            gt: 100,
            lte: 150,
            color: "#5cc38a",
          },
          {
            gt: 150,
            lte: 200,
            color: "#5cc38a",
          },
          {
            gt: 200,
            lte: 300,
            color: "#5cc38a",
          },
          {
            gt: 300,
            color: "#5cc38a",
          },
        ],
        outOfRange: {
          color: "#5cc38a",
        },
      },
      series: {
        name: "Honest AI",
        type: "line",
        data: data.map(function (item) {
          return item[1];
        }),
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(0, 128, 0, 2)",
            },
            {
              offset: 1,
              color: "rgba(255, 0, 0, 0.4)",
            },
          ]),
        },
        markLine: {
          silent: true,
          lineStyle: {
            color: "#333",
          },
          data: [],
        },
        markPoint: {
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: false,
            },
          },

          data: [
            {
              type: "max",
              name: "Max",
              symbol: "circle",
              symbolSize: 10,
              itemStyle: {
                color: "#5cc38a",
                borderColor: "#5cc38a",
                borderWidth: 2,
              },
              label: {
                show: false,
              },

              emphasis: {
                itemStyle: {
                  color: "#5cc38a",
                  borderColor: "#FFFFFF",
                  borderWidth: 4,
                },
              },
            },
            {
              type: "min",
              name: "Min",
              symbol: "circle",
              source: source,
              symbolSize: 10,
              itemStyle: {
                color: "#f50000",
                borderColor: "#f50000",
                borderWidth: 2,
              },
              label: {
                show: false,
              },
              emphasis: {
                itemStyle: {
                  color: "#f50000",
                  borderColor: "#FFFFFF",
                  borderWidth: 4,
                },
              },
            },
          ],
        },
      },
    };

    const myChart =
      echarts.getInstanceByDom(chartDom.current) ||
      echarts.init(chartDom.current);
    myChart.setOption(option, true);

    if (myChart.current) {
      myChart.current.setOption(option, true);
    }
  };

  const baseStyle = {
    padding: "10px 20px",
    margin: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: isHovered ? "#2C3E50" : "#34495E", // Change color based on hover state (darkened colors)
    color: "#ECF0F1", // Lighter text color for contrast against the dark background
    cursor: "pointer",
    fontSize: "15px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  };

  const modalStyle = {
    display: modalContent ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    textAlign: "center",
  };

  const overlayStyle = {
    display: modalContent ? "block" : "none",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: "999",
  };

  useEffect(() => {
    if (chartDom.current) {
      myChart.current = echarts.init(chartDom.current, "dark");
      const option = {
        xAxis: {
          data: data.map((item) => item[0]),
        },
        yAxis: {},
        series: {
          name: "Beijing AQI",
          type: "line",
          data: data.map((item) => item[1]),
        },
      };
      myChart.current.setOption(option);
    }
    setChartOption("5m"); // Default to 5 years initially
  }, []);

  return (
    <div>
      <div ref={chartDom} style={{ width: "100%", height: "400px" }}></div>
      <center>
        <div>
          {["5d", "5w", "5m", "5y"].map((time) => (
            <button
              key={time}
              style={baseStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              onClick={() => setChartOption(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </center>
      <div style={overlayStyle} onClick={() => setModalContent(null)}></div>
      <div style={modalStyle}>
        <p dangerouslySetInnerHTML={{ __html: modalContent }}></p>
        <button onClick={() => setModalContent(null)}>Close</button>
      </div>
    </div>
  );
}

export default LineChartComponent;
