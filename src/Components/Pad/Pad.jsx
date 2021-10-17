import "./Pad.scss";
import { useContext } from "react";
import { Contex } from "../../Store";
 

function DrumPad(props) {
  const [state, dispatch] = useContext(Contex);

  const playSound = (key) => {

    if (key) {
      var sound = document.getElementById(key.keyTrigger);
      sound.play();
      // sound.volume = state.volume;
    }

    dispatch({
      type: "SET_KEY",
      payload: key,
    });
    dispatch({
      type: "SET_DISPLAY",
      payload: key.id,
    });
  };

  return (
    <div className="pad">
      {props.bank
        ? props.bank.map((data, index) => (
            <div
              key={index}
              className="drum-pad"
              id={index}
              onClick={() => playSound(data)}
            >
              {data.keyTrigger}
              <audio
                src={data.url}
                id={data.keyTrigger}
                className="clip"
              ></audio>
            </div>
          ))
        : ""}
    </div>
  );
}

export default DrumPad;
