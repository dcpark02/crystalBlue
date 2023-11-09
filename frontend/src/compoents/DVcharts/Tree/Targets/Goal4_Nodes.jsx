import React from "react";
import { layer2SDG } from "./targetStyle";
import { Position } from "reactflow";

import { goal4Pos } from "./position"; // cat, subcat

export const qualityEducationNodes = [
  {
    id: "t-4-1",
    data: {
      label: "Free primary and secondary education",
    },

    position: goal4Pos(0, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(4),
  },
  {
    id: "t-4-1-1",
    data: {
      label: "Achieving proficiency in reading and mathematics",
    },
    position: goal4Pos(0, 1),
    style: layer2SDG(4),
  },
  {
    id: "t-4-1-2",
    data: {
      label: "Ensuring children complete their education",
    },
    position: goal4Pos(0, 2),
    style: layer2SDG(4),
  },
  {
    id: "t-4-2",
    data: {
      label: "Equal access to quality pre-primary education",
    },
    position: goal4Pos(1, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(4),
  },
  {
    id: "t-4-2-1",
    data: {
      label: "Ensuring children are developmentally on track",
    },
    position: goal4Pos(1, 1),
    style: layer2SDG(4),
  },
  {
    id: "t-4-2-2",
    data: {
      label: "Participation in pre-primary education",
    },
    position: goal4Pos(1, 2),
    style: layer2SDG(4),
  },
  {
    id: "t-4-3",
    data: {
      label:
        "Equal access to affordable technical, vocational and tertiary education",
    },
    position: goal4Pos(2, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(4),
  },
  {
    id: "t-4-3-1",
    data: {
      label: "Equal access to further education",
    },
    position: goal4Pos(2, 1),
    style: layer2SDG(4),
  },
  {
    id: "t-4-4",
    data: {
      label:
        "Increase the number of people with relevant skills for financial success",
    },
    position: goal4Pos(3, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(4),
  },
  {
    id: "t-4-4-1",
    data: {
      label: "Information and communications technology (ICT) skills",
    },
    position: goal4Pos(3, 1),
    style: layer2SDG(4),
  },
  {
    id: "t-4-5",
    data: {
      label: "Eliminate all discrimination in education",
    },

    position: goal4Pos(4, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(4),
  },
  {
    id: "t-4-5-1",
    data: {
      label: "Disparities in educational access",
    },
    position: goal4Pos(4, 1),
    style: layer2SDG(4),
  },
  {
    id: "t-4-6",
    data: {
      label: "Universal literacy and numeracy",
    },
    position: goal4Pos(5, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(4),
  },
  {
    id: "t-4-6-1",
    data: {
      label: "Universal literacy and numeracy",
    },
    position: goal4Pos(5, 1),
    style: layer2SDG(4),
  },
  {
    id: "t-4-7",
    data: {
      label: "Education for sustainable development and global citizenship",
    },
    position: goal4Pos(6, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(4),
  },
  {
    id: "t-4-7-1",
    data: {
      label: "Education on sustainable development and global citizenship",
    },
    position: goal4Pos(6, 1),
    style: layer2SDG(4),
  },
  {
    id: "t-4-a",
    data: {
      label: "Build and upgrade education facilities",
    },

    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: goal4Pos(7, 0),
    style: layer2SDG(4),
  },
  {
    id: "t-4-a-1",
    data: {
      label: "Inclusive and safe schools",
    },
    position: goal4Pos(7, 1),
    style: layer2SDG(4),
  },
  {
    id: "t-4-b",
    data: {
      label: "Expand higher education scholarships for developing countries",
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: goal4Pos(8, 0),
    style: layer2SDG(4),
  },
  {
    id: "t-4-b-1",
    data: {
      label: "Scholarships for developing countries",
    },
    position: goal4Pos(8, 1),
    style: layer2SDG(4),
  },
  {
    id: "t-4-c",
    data: {
      label:
        "Increase the supply of qualified teachers in developing countries",
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: goal4Pos(9, 0),
    style: layer2SDG(4),
  },
  {
    id: "t-4-c-1",
    data: {
      label: "Supply of qualified teachers",
    },
    position: goal4Pos(9, 1),
    style: layer2SDG(4),
  },
];
