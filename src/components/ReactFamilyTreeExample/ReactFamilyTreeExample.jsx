import { useState } from "react";
import ReactFamilyTree from "react-family-tree";
import PinchZoomPan from "./PinchZoomPan";
import PersonNode from "./PersonNode";
import nodes from "./nodes";
import styles from "./ReactFamilyTreeExample.module.css";

const personNodeWidthWithPadding = 180;
const personNodeHeightWithPadding = 130;

const ReactFamilyTreeExample = () => {
  const [rootId, setRootId] = useState(nodes[0].id);

  return (
    <PinchZoomPan min={0.5} max={2.5} captureWheel className={styles.wrapper}>
      <ReactFamilyTree
        nodes={nodes}
        rootId={rootId}
        width={personNodeWidthWithPadding}
        height={personNodeHeightWithPadding}
        renderNode={(node) => (
          <div
            key={node.id}
            style={{
              width: personNodeWidthWithPadding,
              height: personNodeHeightWithPadding,
              padding: "30px 15px",
              position: "absolute",
              transform: `translate(${
                node.left * (personNodeWidthWithPadding / 2)
              }px, ${node.top * (personNodeHeightWithPadding / 2)}px)`,
            }}
          >
            <PersonNode
              node={node}
              onClick={setRootId}
              isRoot={node.id === rootId}
            />
          </div>
        )}
      />
    </PinchZoomPan>
  );
};

export default ReactFamilyTreeExample;
