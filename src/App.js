import "./App.css";
import { useContext } from "react";
import Container from "./Components/container/Container";
import { Contex } from "./Store";

function App() {
  const [state] = useContext(Contex);
  return (
    <div className="App">
      <Container />
      {state.switchIsOn && (
        <div className="main">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
      )}
    </div>
  );
}

export default App;
