import { useState } from "react";
import ReactFamilyTree from "react-family-tree";
import PinchZoomPan from "./PinchZoomPan";
import PersonNode from "./PersonNode";
import nodes from "./nodes";
import styles from "./ReactFamilyTreeExample.module.css";

const PERSON_NODE_WIDTH = 150;
const PERSON_NODE_HEIGHT = 70;
const PERSON_NODE_HORIZONTAL_GAP = 30;
const PERSON_NODE_VERTICAL_GAP = 60;

const fullNodeWidth = PERSON_NODE_WIDTH + PERSON_NODE_HORIZONTAL_GAP;
const fullNodeHeight = PERSON_NODE_HEIGHT + PERSON_NODE_VERTICAL_GAP;

const ReactFamilyTreeExample = () => {
  const [rootId, setRootId] = useState(nodes[0].id);

  return (
    <PinchZoomPan min={0.5} max={2.5} captureWheel className={styles.wrapper}>
      <ReactFamilyTree
        nodes={nodes}
        rootId={rootId}
        width={fullNodeWidth}
        height={fullNodeHeight}
        renderNode={(node) => (
          <div
            key={node.id}
            style={{
              width: fullNodeWidth,
              height: fullNodeHeight,

              padding: `calc(${PERSON_NODE_VERTICAL_GAP / 2}px) calc(${
                PERSON_NODE_HORIZONTAL_GAP / 2
              }px)`,
              position: "absolute",
              transform: `translate(${node.left * (fullNodeWidth / 2)}px, ${
                node.top * (fullNodeHeight / 2)
              }px)`,
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
