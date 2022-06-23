import "./App.css";
// import TextUpdaterFlow from "components/TextUpdaterFlow";
// import AddNewNodes from "components/AddNewNodes";
// import DagreLayoutFlow from "components/DagreLayoutFlow";
// import TreeLayoutFlow from "components/TreeLayoutFlow";
import ReactFamilyTreeExample from "components/ReactFamilyTreeExample";

function App() {
  return (
    <div className="App">
      <h1>Family Tree</h1>
      <div className="flow-container">
        <ReactFamilyTreeExample />
      </div>
    </div>
  );
}

export default App;
