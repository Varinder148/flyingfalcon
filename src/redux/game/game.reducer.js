import gametype from "./game.type";

const INITIAL_STATE = {
  token: "",
  isFetchingToken: false,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case gametype.START_TOKEN_FETCHING:
      return {
        ...state,
        isFetchingToken: true,
      };
    case gametype.TOKEN_REQUEST_SUCCESS:
      return {
        ...state,
        isFetchingToken: false,
        token: action.payload,
      };
    case gametype.TOKEN_REQUEST_FAIL:
      return {
        ...state,
        isFetchingToken: false,
      };
    default:
      return state;
  }
};

export default gameReducer;
