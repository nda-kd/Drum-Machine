import "./Pad.scss";
import { useContext } from "react";
import { Contex } from "../../Store";

function Pad(props) {

  const [state, dispatch] = useContext(Contex);

  const playSound = (key) => {
    dispatch({
      type: "SET_KEY",
      payload: key,
    });
    dispatch({
      type: "SET_DISPLAY",
      payload: key.id
    })
  };

  return (
    <div className="pad">
      {props.bank
        ? props.bank.map((data, index) => (
            <div
              key={index}
              className="drum-pad"
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

export default Pad;