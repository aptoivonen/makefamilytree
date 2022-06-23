import classNames from "classnames";
import styles from "./PersonNode.module.css";

const PersonNode = ({ node, isRoot, onClick }) => {
  return (
    <div
      className={styles.root}
      title={node.id}
      onClick={() => onClick(node.id)}
    >
      <div
        className={classNames(
          styles.inner,
          styles[node.gender],
          isRoot && styles.isRoot
        )}
      >
        {node.name ? node.name : node.id}
        {node.hasSubTree && (
          <div className={classNames(styles.sub, styles[node.gender])} />
        )}
      </div>
    </div>
  );
};

export default PersonNode;
