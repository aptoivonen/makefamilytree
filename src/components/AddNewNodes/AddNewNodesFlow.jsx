import { ReactFlowProvider } from "react-flow-renderer";
import AddNewNodes from "./AddNewNodes";

const AddNewNodesFlow = () => {
  return (
    <ReactFlowProvider>
      <AddNewNodes />
    </ReactFlowProvider>
  );
};

export default AddNewNodesFlow;
