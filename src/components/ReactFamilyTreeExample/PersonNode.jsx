import classNames from "classnames";
import styles from "./PersonNode.module.css";

const PersonNode = ({ node, isRoot, onClick, style }) => {
  return (
    <div className={styles.root} style={style} title={node.id}>
      <div
        className={classNames(
          styles.inner,
          styles[node.gender],
          isRoot && styles.isRoot
        )}
      >
        {node.name ? node.name : node.id}
        {node.hasSubTree && (
          <div
            className={classNames(styles.sub, styles[node.gender])}
            onClick={() => onClick(node.id)}
          />
        )}
      </div>
    </div>
  );
};

export default PersonNode;
