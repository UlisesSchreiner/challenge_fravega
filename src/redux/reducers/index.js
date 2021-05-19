import { combineReducers } from "redux";
import pokeListReducer from './pokeListReducer';
import pokemonReducer from './pokemoReducer';

// este es el nombre que despues toma el state del de redux en useSelector
export default combineReducers({
    pokeListReducer,
    pokemonReducer
})