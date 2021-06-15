import { combineReducers } from "redux";
import gameReducer from "./game/game.reducer";
import playerReducer from "./player/player.reducer";

const rootReducer = combineReducers({
  game: gameReducer,
  player: playerReducer,
});

export default rootReducer;
