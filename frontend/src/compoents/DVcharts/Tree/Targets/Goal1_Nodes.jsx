import React from "react";

import { layer2SDG } from "./targetStyle";
import { Position } from "reactflow";
import { goal1Pos } from "./position"; // cat, subcat

export const noPovertyNodes = [
  {
    id: "t-1-1",
    data: { label: "Eradicate extreme poverty" },
    position: goal1Pos(0, 0),
    style: layer2SDG(1),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "t-1-1-1",
    data: {
      label: "Share below the international poverty line",
    },
    position: goal1Pos(0, 1),
    style: layer2SDG(1),
  },
  {
    id: "t-1-2",
    data: { label: "Reduce poverty by half" },
    position: goal1Pos(1, 0),
    style: layer2SDG(1),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "t-1-2-1",
    data: {
      label: "Share below the national poverty line”",
    },
    position: goal1Pos(1, 1),
    style: layer2SDG(1),
  },
  {
    id: "t-1-2-2",
    data: {
      label:
        "Share in multidimensional poverty according to national definitions",
    },
    position: goal1Pos(1, 2),
    style: layer2SDG(1),
  },
  {
    id: "t-1-3",
    data: { label: "Implement social protection systems" },
    position: goal1Pos(2, 0),
    style: layer2SDG(1),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "t-1-3-1",
    data: {
      label: "Population covered by social protection floors/systems",
    },
    position: goal1Pos(2, 1),
    style: layer2SDG(1),
  },
  {
    id: "t-1-4",
    data: { label: "Ensure equal rights to economic resources" },
    position: goal1Pos(3, 0),
    style: layer2SDG(1),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "t-1-4-1",
    data: { label: "Access to basic services" },
    position: goal1Pos(3, 1),
    style: layer2SDG(1),
  },
  {
    id: "t-1-4-2",
    data: { label: "Secure tenure rights to land" },
    position: goal1Pos(3, 2),
    style: layer2SDG(1),
  },
  {
    id: "t-1-5",
    data: { label: "Build resilience to climate-related hazards" },
    position: goal1Pos(4, 0),
    style: layer2SDG(1),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "t-1-5-1",
    data: {
      label: "Deaths and affected persons from natural disasters",
    },
    position: goal1Pos(4, 1),
    style: layer2SDG(1),
  },
  {
    id: "t-1-5-2",
    data: { label: "Direct economic loss from natural disasters" },
    position: goal1Pos(4, 2),
    style: layer2SDG(1),
  },
  {
    id: "t-1-5-3",
    data: { label: "Disaster risk reduction strategies" },
    position: goal1Pos(4, 3),
    style: layer2SDG(1),
  },
  {
    id: "t-1-5-4",
    data: { label: "Local disaster risk reduction" },
    position: goal1Pos(4, 4),
    style: layer2SDG(1),
  },
  {
    id: "t-1-a",
    data: { label: "Mobilization of resources to end poverty" },
    position: goal1Pos(5, 0),
    style: layer2SDG(1),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "t-1-a-1",
    data: { label: "Development assistance for poverty reduction" },
    position: goal1Pos(5, 1),
    style: layer2SDG(1),
  },
  {
    id: "t-1-a-2",
    data: { label: "Government spending on essential services" },
    position: goal1Pos(5, 2),
    style: layer2SDG(1),
  },
  {
    id: "t-1-b",
    data: { label: "Policy frameworks for poverty eradication" },
    position: goal1Pos(6, 0),
    style: layer2SDG(1),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "t-1-b-1",
    data: { label: "Pro-poor public spending" },
    position: goal1Pos(6, 1),
    style: layer2SDG(1),
  },
];
