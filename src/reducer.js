const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_DISPLAY":
      return {
        ...state,
        display: action.payload,
      };
    case "SET_KEY":
      return {
        ...state,
        keyPressed: action.payload,
      };
    case "TURN_ON_OFF":
      return {
        ...state,
        switchIsOn: action.payload,
      };
    case "SET_VOLUME":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
