import React from "react";
import {
  defaultNodeStyle,
  Environment,
  Social,
  Governance,
  layer2SDG,
  layer2SDGEdge,
  VennStyle,
} from "./style";

import { layerTwoPosition } from "./positioning";

import { noPovertyNodes } from "./Targets/Goal1_Nodes";
import { noPovertyEdges } from "./Targets/Goal1_Edges";
import { zeroHungerNodes } from "./Targets/Goal2_Nodes";
import { zeroHungerEdges } from "./Targets/Goal2_Edges";
import { goodHealthNodes } from "./Targets/Goal3_Nodes";
import { goodHealthEdges } from "./Targets/Goal3_Edges";
import { qualityEducationNodes } from "./Targets/Goal4_Nodes";
import { qualityEducationEdges } from "./Targets/Goal4_Edges";
import { reducedInequalitiesNodes } from "./Targets/Goal10_Nodes";
import { reducedInequalitiesEdges } from "./Targets/Goal10_Edges";

const vennNodes = [
  {
    id: "VennEnv",
    data: { label: "" },
    position: { x: -618.6207843133188, y: -342.9691651812641 },
    style: VennStyle("env"),
  },
  {
    id: "VennSoc",
    data: { label: "" },
    position: { x: 79.74923351151256, y: 443.21993166975153 },
    style: VennStyle("soc"),
  },
  {
    id: "VennGov",
    data: { label: "" },
    position: { x: 442, y: -386 },
    style: VennStyle("gov"),
  },
];

const envNodes = [
  {
    id: "Environment",
    data: { label: "Environment" },
    position: { x: 180, y: 440 },
    style: Environment,
  },
  // Layer 2
  {
    id: "15",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(15), // layer, y, number
    style: layer2SDG(15),
  },
  {
    id: "13",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(13), // layer, y, number
    style: layer2SDG(13),
  },
  {
    id: "6",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(6), // layer, y, number
    style: layer2SDG(6),
  },
  {
    id: "7",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(7), // layer, y, number
    style: layer2SDG(7),
  },
  {
    id: "14",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(14), // layer, y, number
    style: layer2SDG(14),
  },
];

const socNodes = [
  {
    id: "Social",
    data: { label: "Social" },
    position: { x: 643, y: 1102 },
    style: Social,
  },

  // Layer 2
  {
    id: "3",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(3),
    style: layer2SDG(3),
  },
  {
    id: "4",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(4),
    style: layer2SDG(4),
  },
  {
    id: "5",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(5),
    style: layer2SDG(5),
  },
  {
    id: "1",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(1),
    style: layer2SDG(1),
  },
  {
    id: "2",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(2),
    style: layer2SDG(2),
  },
  {
    id: "8",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(8),
    style: layer2SDG(8),
  },
  {
    id: "9",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(9),
    style: layer2SDG(9),
  },
  {
    id: "10",
    type: "input",
    data: { label: "" },
    position: layerTwoPosition(10),
    style: layer2SDG(10),
  },
];

const govNodes = [
  {
    id: "Governance",
    data: { label: "Governance" },
    position: { x: 998, y: 256 },
    style: Governance,
  },
  {
    id: "12",
    type: "input",
    data: { label: "" },
    style: layer2SDG(12),
    position: layerTwoPosition(12),
  },
  {
    id: "11",
    type: "input",
    data: { label: "" },
    style: layer2SDG(11),
    position: layerTwoPosition(11),
  },
  {
    id: "16",
    type: "input",
    data: { label: "" },
    style: layer2SDG(16),
    position: layerTwoPosition(16),
  },
  {
    id: "17",
    type: "input",
    data: { label: "" },
    style: layer2SDG(17),
    position: layerTwoPosition(17),
  },
];

export const nodes = vennNodes.concat(
  [
    {
      id: "Apple",
      type: "tooltip",
      data: {
        label: "Apple, Inc. ESG Rating",
        toolbarPosition: "right",
        tooltip: "Apple Company",
      },
      position: { x: 492, y: 542 },
      style: defaultNodeStyle,
    },
  ],
  envNodes,
  socNodes,
  govNodes,
  noPovertyNodes,
  zeroHungerNodes,
  goodHealthNodes,
  qualityEducationNodes,
  reducedInequalitiesNodes
);

const envEdge = [
  {
    id: "eEnvironment-6",
    source: "Environment",
    target: "6",
    style: layer2SDGEdge("env"),
  },
  {
    id: "eEnvironment-7",
    source: "Environment",
    target: "7",
    style: layer2SDGEdge("env"),
  },
  {
    id: "eEnvironment-9",
    source: "Environment",
    target: "9",
    style: layer2SDGEdge("env"),
  },
  {
    id: "eEnvironment-11",
    source: "Environment",
    target: "11",
    style: layer2SDGEdge("env"),
  },
  {
    id: "eEnvironment-12",
    source: "Environment",
    target: "12",
    style: layer2SDGEdge("env"),
  },
  {
    id: "eEnvironment-13",
    source: "Environment",
    target: "13",
    style: layer2SDGEdge("env"),
  },
  {
    id: "eEnvironment-14",
    source: "Environment",
    target: "14",
    style: layer2SDGEdge("env"),
  },
  {
    id: "eEnvironment-15",
    source: "Environment",
    target: "15",
    style: layer2SDGEdge("env"),
  },
];
const socEdge = [
  {
    id: "eSocial-1",
    source: "Social",
    target: "1",
    style: layer2SDGEdge("soc"),
  },
  {
    id: "eSocial-2",
    source: "Social",
    target: "2",
    style: layer2SDGEdge("soc"),
  },
  {
    id: "eSocial-3",
    source: "Social",
    target: "3",
    style: layer2SDGEdge("soc"),
  },
  {
    id: "eSocial-4",
    source: "Social",
    target: "4",
    style: layer2SDGEdge("soc"),
  },
  {
    id: "eSocial-5",
    source: "Social",
    target: "5",
    style: layer2SDGEdge("soc"),
  },
  {
    id: "eSocial-6",
    source: "Social",
    target: "6",
    style: layer2SDGEdge("soc"),
  },
  {
    id: "eSocial-8",
    source: "Social",
    target: "8",
    style: layer2SDGEdge("soc"),
  },
  {
    id: "eSocial-9",
    source: "Social",
    target: "9",
    style: layer2SDGEdge("soc"),
  },
  {
    id: "eSocial-10",
    source: "Social",
    target: "10",
    style: layer2SDGEdge("soc"),
  },
  {
    id: "eSocial-12",
    source: "Social",
    target: "12",
    style: layer2SDGEdge("soc"),
  },
  {
    id: "eSocial-16",
    source: "Social",
    target: "16",
    style: layer2SDGEdge("soc"),
  },
  ///
];
const govEdge = [
  {
    id: "eGovernance-5",
    source: "Governance",
    target: "5",
    style: layer2SDGEdge("gov"),
  },
  {
    id: "eGovernance-8",
    source: "Governance",
    target: "8",
    style: layer2SDGEdge("gov"),
  },
  {
    id: "eGovernance-9",
    source: "Governance",
    target: "9",
    style: layer2SDGEdge("gov"),
  },
  {
    id: "eGovernance-11",
    source: "Governance",
    target: "11",
    style: layer2SDGEdge("gov"),
  },
  {
    id: "eGovernance-12",
    source: "Governance",
    target: "12",
    style: layer2SDGEdge("gov"),
  },
  {
    id: "eGovernance-13",
    source: "Governance",
    target: "13",
    style: layer2SDGEdge("gov"),
  },
  {
    id: "eGovernance-16",
    source: "Governance",
    target: "16",
    style: layer2SDGEdge("gov"),
  },
  {
    id: "eGovernance-17",
    source: "Governance",
    target: "17",
    style: layer2SDGEdge("gov"),
  },
];

export const edges = [
  {
    id: "eApple-Environment",
    source: "Apple",
    target: "Environment",
    style: layer2SDGEdge("env"),
  },
  {
    id: "eApple-Social",
    source: "Apple",
    target: "Social",
    style: layer2SDGEdge("soc"),
  },
  {
    id: "eApple-Governance",
    source: "Apple",
    target: "Governance",
    style: layer2SDGEdge("gov"),
  },
].concat(
  envEdge,
  socEdge,
  govEdge,
  noPovertyEdges,
  zeroHungerEdges,
  goodHealthEdges,
  qualityEducationEdges,
  reducedInequalitiesEdges
);
