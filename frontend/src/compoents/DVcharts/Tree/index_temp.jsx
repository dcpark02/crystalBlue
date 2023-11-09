import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

import { VennStyle } from "./style";
import { VennPosition } from "./positioning";
import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";

import TooltipNode from "./TooltipNode";

const nodeTypes = {
  tooltip: TooltipNode,
};
const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const Tree = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const getChildren = (nodeId) => {
    return initialEdges
      .filter((edge) => edge.source === nodeId)
      .map((edge) => edge.target);
  };

  const getAllDescendants = (nodeId) => {
    let descendants = [];
    const children = getChildren(nodeId);

    for (let child of children) {
      descendants.push(child);
      descendants = [...descendants, ...getAllDescendants(child)];
    }

    return descendants;
  };

  const recursiveGetChildren = (nodeId) => {
    let children = [];
    const directChildren = getChildren(nodeId);
    for (let child of directChildren) {
      children.push(child);
      children = children.concat(recursiveGetChildren(child));
    }
    return children;
  };

  const handleNodeClick = (e, node) => {
    const nodeChildren = getChildren(node.id);

    if (nodeChildren.length > 0) {
      const firstChild = nodes.find((n) => n.id === nodeChildren[0]);
      if (firstChild) {
        const descendants = getAllDescendants(node.id);
        setNodes((prev) => prev.filter((n) => !descendants.includes(n.id)));
        setEdges((prev) =>
          prev.filter((edge) => !descendants.includes(edge.target))
        );
      } else {
        const childrenNodes = nodeChildren.map((id) =>
          initialNodes.find((n) => n.id === id)
        );
        const childrenEdges = initialEdges.filter(
          (edge) => edge.source === node.id
        );
        setNodes((prev) => [...prev, ...childrenNodes]);
        setEdges((prev) => [...prev, ...childrenEdges]);
      }
    }
  };

  const findNodesWithMultipleParents = () => {
    const parentCounts = {};

    initialEdges.forEach((edge) => {
      if (!parentCounts[edge.target]) {
        parentCounts[edge.target] = 0;
      }
      parentCounts[edge.target]++;
    });

    return Object.keys(parentCounts).filter((id) => parentCounts[id] > 1);
  };

  const getCenterOfNodes = (nodeIds) => {
    const relevantNodes = initialNodes.filter((node) =>
      nodeIds.includes(node.id)
    );

    let totalX = 0;
    let totalY = 0;

    relevantNodes.forEach((node) => {
      totalX += node.position.x;
      totalY += node.position.y;
    });

    return {
      x: totalX / relevantNodes.length,
      y: totalY / relevantNodes.length,
    };
  };

  const getParentsOfNode = (nodeId) => {
    return initialEdges
      .filter((edge) => edge.target === nodeId)
      .map((edge) => edge.source);
  };

  const findNodesWithCommonParents = () => {
    const parentToChildrenMap = {};

    initialEdges.forEach((edge) => {
      if (!parentToChildrenMap[edge.source]) {
        parentToChildrenMap[edge.source] = [];
      }
      parentToChildrenMap[edge.source].push(edge.target);
    });

    return Object.values(parentToChildrenMap).filter(
      (children) => children.length > 1
    );
  };

  const getRadiusOfNodes = (nodeIds) => {
    const distances = [];
    const relevantNodes = initialNodes.filter((node) =>
      nodeIds.includes(node.id)
    );
    for (let i = 0; i < relevantNodes.length; i++) {
      for (let j = i + 1; j < relevantNodes.length; j++) {
        const dist = Math.sqrt(
          Math.pow(
            relevantNodes[i].position.x - relevantNodes[j].position.x,
            2
          ) +
            Math.pow(
              relevantNodes[i].position.y - relevantNodes[j].position.y,
              2
            )
        );
        distances.push(dist);
      }
    }
    return Math.max(...distances) / 2;
  };

  const CircleLayer = () => {
    const nodesWithCommonParents = findNodesWithCommonParents();
    var venn = [];
    nodesWithCommonParents.map((nodeGroup, index) => {
      const center = getCenterOfNodes(nodeGroup);
      const radius = getRadiusOfNodes(nodeGroup);
      venn = [
        {
          id: "TT",
          data: { label: "" },
          position: { x: center.x, y: center.y },
          style: VennStyle(),
        },
      ];
      setNodes((prev) => [...prev, venn]);
    });

    console.log(nodesWithCommonParents);
    // return (
    //   // <div>
    //   //   {nodesWithCommonParents.map((nodeGroup, index) => {
    //   //     const center = getCenterOfNodes(nodeGroup);
    //   //     const radius = getRadiusOfNodes(nodeGroup);
    //   //     return (
    //   //       <div
    //   //         key={index}
    //   //         style={{
    //   //           position: "absolute",
    //   //           left: center.x - radius,
    //   //           top: center.y - radius,
    //   //           width: radius * 2,
    //   //           height: radius * 2,
    //   //           borderRadius: "50%",
    //   //           border: "2px solid #FF0000",
    //   //           ...VennStyle(),
    //   //         }}
    //   //       />
    //   //     );
    //   //   })}
    //   // </div>
    // );
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      onNodeClick={handleNodeClick}
      fitView
      // attributionPosition="top-right"
      nodeTypes={nodeTypes}
    >
      {/* <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === "input") return "#0041d0";
          if (n.type === "output") return "#ff0072";
          if (n.type === "default") return "#1a192b";

          return "#eee";
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return "#fff";
        }}
        nodeBorderRadius={2}
      /> */}
      {/* <CircleLayer /> */}
      <Controls />
      <Background color="#000" gap={0} />
    </ReactFlow>
  );
};

export default Tree;
