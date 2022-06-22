import "./App.css";
// import TextUpdaterFlow from "components/TextUpdaterFlow";
// import AddNewNodes from "components/AddNewNodes";
import DagreLayoutFlow from "components/DagreLayoutFlow";

function App() {
  return (
    <div className="App">
      <h1>Family Tree</h1>
      <div className="flow-container">
        <DagreLayoutFlow />
      </div>
    </div>
  );
}

export default App;
