import React from "react";
import { layer2SDG } from "./targetStyle";
import { Position } from "reactflow";

import { goal2Pos } from "./position"; // cat, subcat
export const zeroHungerNodes = [
  {
    id: "t-2-1",
    data: {
      label: "Universal access to safe, nutritious, and sufficient food",
    },
    position: goal2Pos(0, 0),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(2),
  },
  {
    id: "t-2-1-1",
    data: { label: "Prevalence of undernourishment" },
    position: goal2Pos(0, 1),
    style: layer2SDG(2),
  },
  {
    id: "t-2-1-2",
    data: { label: "Prevalence of food insecurity" },
    position: goal2Pos(0, 2),
    style: layer2SDG(2),
  },
  {
    id: "t-2-2",
    data: { label: "End all forms of malnutrition" },
    position: goal2Pos(1, 0),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(2),
  },
  {
    id: "t-2-2-1",
    data: { label: "Prevalence of childhood stunting" },
    position: goal2Pos(1, 1),
    style: layer2SDG(2),
  },
  {
    id: "t-2-2-2",
    data: {
      label: "Prevalence of childhood malnutrition (wasting or overweight)",
    },
    position: goal2Pos(1, 2),
    style: layer2SDG(2),
  },
  {
    id: "t-2-3",
    data: {
      label:
        "Double the productivity and incomes of small-scale food producers",
    },
    position: goal2Pos(2, 0),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(2),
  },
  {
    id: "t-2-3-1",
    data: { label: "Production per labour unit" },
    position: goal2Pos(2, 1),
    style: layer2SDG(2),
  },
  {
    id: "t-2-3-2",
    data: { label: "Income of small-scale food producers" },
    position: goal2Pos(2, 2),
    style: layer2SDG(2),
  },
  {
    id: "t-2-4",
    data: {
      label: "Sustainable food production and resilient agricultural practices",
    },
    position: goal2Pos(3, 0),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(2),
  },
  {
    id: "t-2-4-1",
    data: { label: "Sustainable food production" },
    position: goal2Pos(3, 1),
    style: layer2SDG(2),
  },
  {
    id: "t-2-5",
    data: {
      label: "Maintain the genetic diversity in food production",
    },
    position: goal2Pos(4, 0),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(2),
  },
  {
    id: "t-2-5-1",
    data: { label: "Genetic resources in conservation facilities" },
    position: goal2Pos(4, 1),
    style: layer2SDG(2),
  },
  {
    id: "t-2-5-2",
    data: { label: "Local breeds at risk of extinction" },
    position: goal2Pos(4, 2),
    style: layer2SDG(2),
  },
  {
    id: "t-2-a",
    data: {
      label:
        "Invest in rural infrastructure, agricultural research, technology and gene banks",
    },
    position: goal2Pos(5, 0),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(2),
  },
  {
    id: "t-2-a-1",
    data: { label: "Agriculture orientation index" },
    position: goal2Pos(5, 1),
    style: layer2SDG(2),
  },
  {
    id: "t-2-a-2",
    data: { label: "Official flows to agriculture" },
    position: goal2Pos(5, 2),
    style: layer2SDG(2),
  },
  {
    id: "t-2-b",
    data: {
      label:
        "Prevent agricultural trade restrictions, market distortions and export subsidies",
    },
    position: goal2Pos(6, 0, 50),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(2),
  },
  {
    id: "t-2-b-1",
    data: { label: "Agricultural export subsidies" },
    position: goal2Pos(6, 1, 50),
    style: layer2SDG(2),
  },
  {
    id: "t-2-c",
    data: {
      label:
        "Ensure stable food commodity markets and timely access to information",
    },
    position: goal2Pos(7, 0, 80),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(2),
  },
  {
    id: "t-2-c-1",
    data: { label: "Food price anomalies" },
    position: goal2Pos(7, 1, 80),
    style: layer2SDG(2),
  },
];
