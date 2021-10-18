import "./Pad.scss";
import { useEffect, useContext } from "react";
import { Contex } from "../../Store";

function DrumPad(props) {
  const [state, dispatch] = useContext(Contex);
  // const [duration, setDuration] = useState(0);

  const playSound = (key) => {
    if (key) {
      var sound = document.getElementById(key.keyTrigger);
      // console.log(sound.duration);
    }

    if (state.switchIsOn) {
      sound.play();
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

  useEffect(() => {
    let audios = document.querySelectorAll(".clip");
    for (let i = 0; i < audios.length; i++) {
      audios[i].volume = parseInt(state.volume) / 100;
    }
  }, [state.volume]);

  return (
    <div className="pad">
      {props.bank
        ? props.bank.map((data, index) => (
            <div
              key={index}
              className={`drum-pad ${state.switchIsOn ? "click" : ""}`}
              id={index}
              onClick={() => playSound(data)}
            >
              {data.keyTrigger}
              <audio
                src={data.url}
                volume={state.volume}
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
