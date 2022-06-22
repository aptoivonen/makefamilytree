import "./App.css";
// import TextUpdaterFlow from "components/TextUpdaterFlow";
// import AddNewNodes from "components/AddNewNodes";
// import DagreLayoutFlow from "components/DagreLayoutFlow";
import TreeLayoutFlow from "components/TreeLayoutFlow";

function App() {
  return (
    <div className="App">
      <h1>Family Tree</h1>
      <div className="flow-container">
        <TreeLayoutFlow />
      </div>
    </div>
  );
}

export default App;
