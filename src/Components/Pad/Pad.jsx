import "./Pad.scss";
import { useEffect, useContext } from "react";
import { Contex } from "../../Store";

function DrumPad(props) {
  const [state, dispatch] = useContext(Contex);
  // const [duration, setDuration] = useState(0);

  const playSound = (key) => {
    if (key) {
      var sound = document.getElementById(key.keyTrigger);
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

  const handleKeyPress = (e) => {
    if (state.switchIsOn && document.getElementById(e.key.toUpperCase())) {
      document.getElementById(e.key.toUpperCase()).parentElement.click();
      document
        .getElementById(e.key.toUpperCase())
        .parentElement.classList.add("keyClick");
      setTimeout(() => {
        document
          .getElementById(e.key.toUpperCase())
          .parentElement.classList.remove("keyClick");
      }, 300);
    }
  };

  useEffect(() => {
    if (state.switchIsOn) {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.removeEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [state.switchIsOn]);

  return (
    <div className="pad">
      {props.bank
        ? props.bank.map((data, index) => (
            <div
              key={index}
              className={`drum-pad ${state.switchIsOn ? "click" : ""}`}
              id={data.id}
              onClick={() => playSound(data)}
            >
              <audio
                src={data.url}
                volume={state.volume}
                id={data.keyTrigger}
                className="clip"
              ></audio>
              {data.keyTrigger}
            </div>
          ))
        : ""}
    </div>
  );
}

export default DrumPad;
