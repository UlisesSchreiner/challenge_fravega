import { FETCHING_POKELIST, FETCHING_POKELIST_SUCCESS, FETCHING_POKELIST_FALIURE } from '../constants';

const initialState = {
    pokeList: {
        pokeList: {
            results: []
        }
    },
    isFetching: false
}   

// dataReducer =
export default (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_POKELIST:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_POKELIST_SUCCESS:
            return {
                ...state,
                pokeList: action.data,
                isFetching: false
            }
        case FETCHING_POKELIST_FALIURE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state
    }
}