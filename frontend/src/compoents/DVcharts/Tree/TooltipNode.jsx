import { memo, useState } from "react";
import { Handle, Position, NodeToolbar } from "reactflow";

const TooltipNode = ({ data }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <NodeToolbar isVisible={isVisible} position={data.toolbarPosition}>
        <div style={{ color: "white" }}>{data.tooltip}</div>
      </NodeToolbar>
      <div style={{ padding: 20 }}>{data.label}</div>
      <Handle type="input" position={Position.Bottom} />
      {/* <Handle type="output" position={Position.Top} /> */}
    </div>
  );
};

export default memo(TooltipNode);
