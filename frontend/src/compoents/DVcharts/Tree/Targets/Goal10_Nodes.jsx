import React from "react";
import { layer2SDG } from "./targetStyle";
import { Position } from "reactflow";

import { goal10Pos } from "./position"; // cat, subcat

export const reducedInequalitiesNodes = [
  {
    id: "t-10-1",
    data: {
      label: "End discrimination against women and girls",
    },

    position: goal10Pos(0, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(10),
  },
  {
    id: "t-10-1-1",
    data: {
      label: "Legal frameworks for gender equality and non-discrimination",
    },
    position: goal10Pos(0, 1),
    style: layer2SDG(10),
  },
  {
    id: "t-10-2",
    data: {
      label: "End all violence against and exploitation of women and girls",
    },
    position: goal10Pos(1, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(10),
  },
  {
    id: "t-10-2-1",
    data: {
      label: "Violence against women from an intimate partner",
    },
    position: goal10Pos(1, 1),
    style: layer2SDG(10),
  },
  {
    id: "t-10-2-2",
    data: {
      label:
        "Violence against women from persons other than an intimate partner",
    },
    position: goal10Pos(1, 2),
    style: layer2SDG(10),
  },
  {
    id: "t-10-3",
    data: {
      label: "Eliminate forced marriages and genital mutilation",
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: goal10Pos(2, 0),
    style: layer2SDG(10),
  },
  {
    id: "t-10-3-1",
    data: {
      label: "Women married before age 15 or 18",
    },
    position: goal10Pos(2, 1),
    style: layer2SDG(10),
  },
  {
    id: "t-10-3-2",
    data: {
      label: "Female genital mutilation/cutting",
    },
    position: goal10Pos(2, 2),
    style: layer2SDG(10),
  },
  {
    id: "t-10-4",
    data: {
      label: "Value unpaid care and promote shared domestic responsibilities",
    },
    position: goal10Pos(3, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(10),
  },
  {
    id: "t-10-4-1",
    data: {
      label: "Time spent on unpaid domestic and care work",
    },
    position: goal10Pos(3, 1),
    style: layer2SDG(10),
  },
  {
    id: "t-10-5",
    data: {
      label: "Ensure full participation in leadership and decision-making",
    },
    position: goal10Pos(4, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(10),
  },
  {
    id: "t-10-5-1",
    data: {
      label: "Women in political positions",
    },
    position: goal10Pos(4, 1),
    style: layer2SDG(10),
  },
  {
    id: "t-10-5-2",
    data: {
      label: "Women in managerial positions",
    },
    position: goal10Pos(4, 2),
    style: layer2SDG(10),
  },
  {
    id: "t-10-6",
    data: {
      label: "Universal access to reproductive rights and health",
    },
    position: goal10Pos(5, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(10),
  },
  {
    id: "t-10-6-1",
    data: {
      label: "Women decision-making on contraceptive use and healthcare",
    },
    position: goal10Pos(5, 1),
    style: layer2SDG(10),
  },
  {
    id: "t-10-6-2",
    data: {
      label: "Guarantee of equal access to sexual and reproductive health care",
    },
    position: goal10Pos(5, 2),
    style: layer2SDG(10),
  },
  {
    id: "t-10-a",
    data: {
      label:
        "Equal rights to economic resources, property ownership and financial services",
    },
    position: goal10Pos(6, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(10),
  },
  {
    id: "t-10-a-1",
    data: {
      label: "Female land rights or ownership",
    },
    position: goal10Pos(6, 1),
    style: layer2SDG(10),
  },
  {
    id: "t-10-a-2",
    data: {
      label: "Equal rights to land ownership",
    },
    position: goal10Pos(6, 2),
    style: layer2SDG(10),
  },
  {
    id: "t-10-b",
    data: {
      label: "Promote empowerment of women through technology",
    },
    position: goal10Pos(7, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(10),
  },
  {
    id: "t-10-b-1",
    data: {
      label: "Mobile telephone ownership",
    },
    position: goal10Pos(7, 1),
    style: layer2SDG(10),
  },
  {
    id: "t-10-c",
    data: {
      label:
        "Adopt and strengthen policies and enforceable legislation for gender equality",
    },
    position: goal10Pos(8, 0),
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: layer2SDG(10),
  },
  {
    id: "t-10-c-1",
    data: {
      label: "Systems to track gender equality",
    },
    position: goal10Pos(8, 1),
    style: layer2SDG(10),
  },
];
