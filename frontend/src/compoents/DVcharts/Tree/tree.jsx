import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

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
  // const rootAndExtraNodes = ["Apple", "VennEnv", "VennSoc", "VennGov"];
  // const initialOpenNodes = initialNodes.filter((node) =>
  //   rootAndExtraNodes.includes(node.id)
  // );
  // const initialOpenEdges = initialEdges.filter(
  //   (edge) =>
  //     rootAndExtraNodes.includes(edge.source) &&
  //     rootAndExtraNodes.includes(edge.target)
  // );

  // const [nodes, setNodes, onNodesChange] = useNodesState(initialOpenNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialOpenEdges);
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
    console.log(node);

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
      // nodesDraggable={false}
    >
      <MiniMap
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
      />
      <Controls />
      <Background color="#000" gap={0} />
    </ReactFlow>
  );
};

export default Tree;
