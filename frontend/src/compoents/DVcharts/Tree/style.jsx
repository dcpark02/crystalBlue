import React from "react";

import noPoverty from "./SDG/1.svg";
import zeroHunger from "./SDG/2.svg";
import goodHealth from "./SDG/3.svg";
import qualityEducation from "./SDG/4.svg";
import genderEquality from "./SDG/5.svg";
import cleanWater from "./SDG/6.svg";
import affordableEnergy from "./SDG/7.svg";
import decentWork from "./SDG/8.svg";
import industry from "./SDG/9.svg";
import reducedInequalities from "./SDG/10.svg";
import sustainableCities from "./SDG/11.svg";
import responsibleConsumption from "./SDG/12.svg";
import climateAction from "./SDG/13.svg";
import lifeBelowWater from "./SDG/14.svg";
import lifeOnLand from "./SDG/15.svg";
import peace from "./SDG/16.svg";
import partnership from "./SDG/17.svg";
import styled from "styled-components";

export const defaultNodeStyle = {
  border: "1px solid #ff0071",
  background: "white",
  borderRadius: 20,
  fontSize: 33,
};

export const layer2SDG = (id) => {
  let color = "";
  switch (id) {
    case 1:
      return {
        backgroundImage: `url(${noPoverty})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 2:
      return {
        backgroundImage: `url(${zeroHunger})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 3:
      return {
        backgroundImage: `url(${goodHealth})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 4:
      return {
        backgroundImage: `url(${qualityEducation})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 5:
      return {
        backgroundImage: `url(${genderEquality})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 6:
      return {
        backgroundImage: `url(${cleanWater})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 7:
      return {
        backgroundImage: `url(${affordableEnergy})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 8:
      return {
        backgroundImage: `url(${decentWork})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 9:
      return {
        backgroundImage: `url(${industry})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 10:
      return {
        backgroundImage: `url(${reducedInequalities})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 11:
      return {
        backgroundImage: `url(${sustainableCities})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 12:
      return {
        backgroundImage: `url(${responsibleConsumption})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 13:
      return {
        backgroundImage: `url(${climateAction})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 14:
      return {
        backgroundImage: `url(${lifeBelowWater})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 15:
      return {
        backgroundImage: `url(${lifeOnLand})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 16:
      return {
        backgroundImage: `url(${peace})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
    case 17:
      return {
        backgroundImage: `url(${partnership})`,
        backgroundRepeat: "fit",
        backgroundPosition: "center center",
        width: "12%",
        paddingTop: "12%",
      };
  }
  return {
    border: `1px solid ${color}`,
    background: color,
    color: "white",
    fontSize: 15,
    padding: 15,
    borderRadius: 10,
  };
};

export const VennStyle = (id) => {
  if (id === "env") {
    return {
      width: "1500px", // Ensure the width and height are equal
      height: "1500px", // for a perfect circle shape
      border: "1px solid #ff0071",
      background: "rgb(63, 144, 76)",
      borderRadius: "50%", // Make it a circle
      display: "flex",
      opacity: 0.2,
      justifyContent: "center",
      alignItems: "center", // To center content inside the circle
      "z-index": 1, // Set the z-index value appropriately
      "pointer-events": "none",
    };
  } else if (id === "soc") {
    return {
      width: "1500px", // Ensure the width and height are equal
      height: "1500px", // for a perfect circle shape
      border: "1px solid #ff0071",
      background: "rgb(176, 49, 52)",
      borderRadius: "50%", // Make it a circle
      display: "flex",
      opacity: 0.2,
      justifyContent: "center",
      alignItems: "center", // To center content inside the circle
      "z-index": 1,
      "pointer-events": "none",
    };
  } else if (id === "gov") {
    return {
      width: "1500px", // Ensure the width and height are equal
      height: "1500px", // for a perfect circle shape
      border: "1px solid #ff0071",
      background: "rgb(44, 52, 143)",
      borderRadius: "50%", // Make it a circle
      display: "flex",
      opacity: 0.2,
      justifyContent: "center",
      alignItems: "center", // To center content inside the circle
      "z-index": 1,
      "pointer-events": "none",
    };
  }
};

export const layer2SDGEdge = (id) => {
  let color = "";
  switch (id) {
    case "env":
      return {
        color: "rgb(63, 144, 76)",
        opacity: 0,
      };

    case "soc":
      return {
        color: "rgb(176, 49, 52)",
        opacity: 0,
      };

    case "gov":
      return {
        color: "rgb(44, 52, 143)",
        opacity: 0,
      };
  }
  return {
    stroke: color,
  };
};

export const Environment = {
  border: "1px solid rgb(63, 144, 76)",
  background: "rgb(63, 144, 76)",
  color: "white",
  fontSize: 30,
  padding: 30,
  width: "18%",
  borderRadius: 15,
  textAlign: "center",
};

export const Social = {
  border: "1px solid rgb(176, 49, 52)",
  background: "rgb(176, 49, 52)",
  color: "white",
  fontSize: 30,
  padding: 30,
  width: "18%",
  borderRadius: 15,
  textAlign: "center",
};

export const Governance = {
  border: "1px solid rgb(44, 52, 143)",
  background: "rgb(44, 52, 143)",
  color: "white",
  fontSize: 30,
  padding: 30,
  width: "18%",
  borderRadius: 15,
  textAlign: "center",
};
