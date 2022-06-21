import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";
import "./TextUpdaterNode.css";

const rightHandleStyle = { left: "calc(100% - 10px)" };

const TextUpdaterNode = ({ data }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text</label>
        <input type="text" id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Left} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="c"
        style={rightHandleStyle}
      />
    </div>
  );
};

export default TextUpdaterNode;
