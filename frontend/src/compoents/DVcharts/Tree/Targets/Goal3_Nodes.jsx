import React from "react";
import { layer2SDG } from "./targetStyle";
import { Position } from "reactflow";

import { goal3Pos } from "./position"; // cat, subcat
export const goodHealthNodes = [
  {
    id: "t-3-1",
    data: {
      label: "Reduce maternal mortality",
    },

    position: goal3Pos(0, 0),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-1-1",
    data: {
      label: "Maternal mortality ratio",
    },
    position: goal3Pos(0, 1),
    style: layer2SDG(3),
  },
  {
    id: "t-3-1-2",
    data: {
      label: "Skilled birth attendance",
    },
    position: goal3Pos(0, 2),
    style: layer2SDG(3),
  },
  {
    id: "t-3-2",
    data: {
      label: "End all preventable deaths under 5 years of age",
    },
    position: goal3Pos(1, 0),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-2-1",
    data: {
      label: "Under-5 mortality rate",
    },
    position: goal3Pos(1, 1),
    style: layer2SDG(3),
  },
  {
    id: "t-3-2-2",
    data: {
      label: "Neonatal mortality rate",
    },
    position: goal3Pos(1, 2),
    style: layer2SDG(3),
  },
  {
    id: "t-3-3",
    data: {
      label: "Fight communicable diseases",
    },
    position: goal3Pos(2, 0),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-3-1",
    data: {
      label: "HIV incidence",
    },
    position: goal3Pos(2, 1),
    style: layer2SDG(3),
  },
  {
    id: "t-3-3-2",
    data: {
      label: "Tuberculosis incidence",
    },
    position: goal3Pos(2, 2),
    style: layer2SDG(3),
  },
  {
    id: "t-3-3-3",
    data: {
      label: "Malaria incidence",
    },
    position: goal3Pos(2, 3),
    style: layer2SDG(3),
  },
  {
    id: "t-3-3-4",
    data: {
      label: "Hepatitis B incidence",
    },
    position: goal3Pos(2, 4),
    style: layer2SDG(3),
  },
  {
    id: "t-3-3-5",
    data: {
      label: "Neglected tropical diseases",
    },
    position: goal3Pos(2, 5),
    style: layer2SDG(3),
  },
  {
    id: "t-3-4",
    data: {
      label:
        "Reduce mortality from non-communicable diseases and promote mental health",
    },
    position: goal3Pos(3, 0),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-4-1",
    data: {
      label: "Mortality rate from non-communicable diseases",
    },
    position: goal3Pos(3, 1),
    style: layer2SDG(3),
  },
  {
    id: "t-3-4-2",
    data: {
      label: "Suicide rate",
    },
    position: goal3Pos(3, 2),
    style: layer2SDG(3),
  },
  {
    id: "t-3-5",
    data: {
      label: "Prevent and treat substance abuse",
    },
    position: goal3Pos(4, 0, 20),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-5-1",
    data: {
      label: "Coverage of treatment interventions for substance use disorders",
    },
    position: goal3Pos(4, 1, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-5-2",
    data: {
      label: "Alcohol consumption per capita",
    },
    position: goal3Pos(4, 2, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-6",
    data: {
      label: "Reduce road injuries and deaths",
    },
    position: goal3Pos(5, 0, 20),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-6-1",
    data: {
      label: "Halve the number of road traffic deaths",
    },
    position: goal3Pos(5, 1, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-7",
    data: {
      label:
        "Universal access to sexual and reproductive care, family planning and education",
    },
    position: goal3Pos(6, 0, 20),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-7-1",
    data: {
      label: "Family planning needs",
    },
    position: goal3Pos(6, 1, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-7-2",
    data: {
      label: "Adolescent birth rate",
    },
    position: goal3Pos(6, 2, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-8",
    data: {
      label: "Achieve universal health coverage",
    },
    position: goal3Pos(7, 0, 20),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-8-1",
    data: {
      label: "Coverage of essential health services",
    },
    position: goal3Pos(7, 1, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-8-2",
    data: {
      label: "Household expenditures on health",
    },
    position: goal3Pos(7, 2, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-9",
    data: {
      label:
        "Reduce illnesses and deaths from hazardous chemicals and pollution",
    },
    position: goal3Pos(8, 0, 20),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-9-1",
    data: {
      label: "Mortality rate from air pollution",
    },
    position: goal3Pos(8, 1, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-9-2",
    data: {
      label: "Mortality rate from unsafe water, sanitation, hygiene (WASH)",
    },
    position: goal3Pos(8, 2, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-9-3",
    data: {
      label: "Mortality rate from unintentional poisoning",
    },
    position: goal3Pos(8, 3, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-a",
    data: {
      label: "Implement the WHO framework convention on tobacco control",
    },
    position: goal3Pos(9, 0, 20),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-a-1",
    data: {
      label: "Prevalence of tobacco use",
    },
    position: goal3Pos(9, 1, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-b",
    data: {
      label:
        "Support research, development and access to affordable vaccines and medicines",
    },
    position: goal3Pos(10, 0, 20),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-b-1",
    data: {
      label: "Vaccine coverage",
    },
    position: goal3Pos(10, 1, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-b-2",
    data: {
      label: "Development assistance to medical research & basic healthcare",
    },
    position: goal3Pos(10, 2, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-b-3",
    data: {
      label: "Availability of essential medicines",
    },
    position: goal3Pos(10, 3, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-c",
    data: {
      label:
        "Increase health financing and support health workforce in developing countries",
    },
    position: goal3Pos(11, 0, 20),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-c-1",
    data: {
      label: "Health worker density",
    },
    position: goal3Pos(11, 1, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-d",
    data: {
      label: "Improve early warning systems for global health risks",
    },
    position: goal3Pos(12, 0, 20),
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: layer2SDG(3),
  },
  {
    id: "t-3-d-1",
    data: {
      label: "Health emergency preparedness",
    },
    position: goal3Pos(12, 1, 20),
    style: layer2SDG(3),
  },
  {
    id: "t-3-d-2",
    data: {
      label: "Bloodstream infections due to antimicrobial-resistant organisms",
    },
    position: goal3Pos(12, 2, 20),
    style: layer2SDG(3),
  },
];
