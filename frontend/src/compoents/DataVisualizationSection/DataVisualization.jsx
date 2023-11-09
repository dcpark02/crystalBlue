import React from "react";
import "./style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Tree from "../DVcharts/Tree/tree";
// import "react-tabs/style/react-tabs.css";  // Default styles, you can override as needed
import { useEffect } from "react";
import { gridChart } from "../DVcharts/DiskGrid";
import LineChartComponent from "../DVcharts/LineChartComponent";
function DataVisualization({ className }) {

    function Grid_Chart() {
        useEffect(() => {
            gridChart();
        }, []);
        return (

            <div id="main" style={{ width: "100%", height: "100%" }}></div>

        );
    }

    return (
        <div>
            <div className="data-visual-tag">
                <img
                    className="data-visual-icon"
                    alt="data visualization icon"
                    src="https://generation-sessions.s3.amazonaws.com/a7d9770784b15651667fd9d8a5758b95/img/frame-56.svg"
                />
                <div className="text-wrapper-17">Data Visualization</div>
            </div>

            <div className={`data-visulazation ${className}`}>
                <Tabs>
                    <TabList className="graphnavigationbar">
                        <Tab className="my-selected-tab"><div className="text-wrapper-33">ESG Progress</div></Tab>
                        <Tab className="my-selected-tab"><div className="text-wrapper-33">ESG Formula</div></Tab>
                        <Tab className="my-selected-tab"><div className="text-wrapper-33">SDG Metrics</div></Tab>
                    </TabList>

                    <TabPanel>
                        <LineChartComponent />
                    </TabPanel>
                    <TabPanel>
                        <Grid_Chart />
                    </TabPanel>
                    <TabPanel> <div style={{ width: "850px", height: "400px" }}>
                        <Tree />
                    </div>

                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default DataVisualization;
