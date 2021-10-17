import React, { useState, useContext } from "react";
import "./Container.scss";
import Pad from "../Pad/Pad";
import Display from "../Display/Display";
import DATA from "../../Data.json";
import { Contex } from "../../Store";

function Container() {
  const [bankToggle, setBankToggle] = useState(true);
  const [bank, setBank] = useState(DATA.DATA.bankOne);

  const [state, dispatch] = useContext(Contex);

  const switchHandle = () => {
    dispatch({
      type: "TURN_ON_OFF",
      payload: !state.switchIsOn,
    });
    dispatch({
      type: "SET_DISPLAY",
      payload: "Welcome",
    });
  };

  const changeBankHandle = () => {
    setBankToggle(!bankToggle);
    if (bankToggle) {
      setBank(DATA.DATA.bankTwo);
      dispatch({
        type: "SET_DISPLAY",
        payload: "Heater Kit",
      });
    } else {
      setBank(DATA.DATA.bankOne);
      dispatch({
        type: "SET_DISPLAY",
        payload: "Smooth Piano Kit",
      });
    }
  };

  const changeVolume = (e) => {
    dispatch({
      type: "SET_VOLUME",
      payload: e.target.value,
    });
    dispatch({
      type: "SET_DISPLAY",
      payload: "Volume: " + e.target.value,
    });
    setTimeout(() => {
      dispatch({
        type: "SET_DISPLAY",
        payload: "",
      });
    }, 2000);
  };

  return (
    <div id="drum-machine" className="container-wrap">
      <Display />
      <div className="controll-button">
        <div className="speaker-wrap">
          <div id="y"></div>
        </div>
        <div className="button-wrap">
          <div className="off-on">
            <button className={`toggle ${state.switchIsOn ? "off" : ""}`}>
              <span
                className={state.switchIsOn ? "toggleLampOn" : "toggleLampOff"}
              ></span>
              <div aria-hidden="true" className="switchArea">
                <div className="switch" onClick={switchHandle}>
                  <div className="lines"></div>
                </div>
              </div>
            </button>
          </div>
          <div
            className={`toggle-wrapper ${bankToggle ? "pushed" : ""}`}
            onClick={changeBankHandle}
          >
            <div className="rect_2"></div>
            <div className="rect_1">
              <div className="rect_1__inset"></div>
            </div>
            <div className="rect_3"></div>
            <div className="toggle_handler">
              <div className="toggle__ellips"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pad-wrap">
        <Pad bank={bank} />
      </div>
      <div className="volums">
        <input
          type="range"
          id="vol"
          name="vol"
          min="0"
          max="100"
          value={state.volume}
          onChange={(e) => changeVolume(e)}
        />
      </div>
    </div>
  );
}

export default Container;
