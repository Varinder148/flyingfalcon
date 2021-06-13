import axios from "axios";

import gametype from "./game.type";

export const startFetchToken = () => ({
  type: gametype.START_TOKEN_FETCHING,
});

export const fetchTokenSuccess = (token) => ({
  type: gametype.TOKEN_REQUEST_SUCCESS,
  payload: token,
});

export const fetchTokenFail = (token) => ({
  type: gametype.TOKEN_REQUEST_FAIL,
});

export const fetchTokenAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(startFetchToken());
      let res = await axios.post("/token");
      dispatch(fetchTokenSuccess(res.data.token));
    } catch {
      dispatch(fetchTokenFail());
    }
  };
};
