import React, { useContext } from "react";
import "./Display.scss";
import { Contex } from "../../Store";

function Display() {
  const [state] = useContext(Contex);
  return (
    <div className="display-wrap">
      <div id="display">{state.switchIsOn ? state.display : ""}</div>
    </div>
  );
}

export default Display;
