import "./App.css";
// import { TestFlow } from "components";
import TextUpdaterFlow from "components/TextUpdaterFlow";

function App() {
  return (
    <div className="App">
      <h1>Family Tree</h1>
      <div className="flow-container">
        <TextUpdaterFlow />
      </div>
    </div>
  );
}

export default App;
