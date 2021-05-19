import { FETCHING_POKMON, FETCHING_POKMON_SUCCESS, FETCHING_POKMON_FALIURE } from '../constants';

const initialState = {
    pokemon: {},
    isFetching: false
}   

// dataReducer =
export default (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_POKMON:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_POKMON_SUCCESS:
            return {
                ...state,
                pokemon: action.data,
                isFetching: false
            }
        case FETCHING_POKMON_FALIURE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state
    }
}