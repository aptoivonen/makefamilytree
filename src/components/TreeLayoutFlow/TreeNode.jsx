import { Handle, Position } from "react-flow-renderer";
import "./TreeNode.css";

const TreeNode = ({ data }) => {
  return (
    <div className="tree-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <span>{data.label}</span>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default TreeNode;
