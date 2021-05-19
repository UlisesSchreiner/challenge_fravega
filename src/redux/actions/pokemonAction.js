import { API_SOCKET } from '../../config/constants';
import { FETCHING_POKMON, FETCHING_POKMON_SUCCESS, FETCHING_POKMON_FALIURE } from '../constants';

export const getData = () => {
    return {
        type: FETCHING_POKMON
    }
}

export const getDataSuccess = data => {
    return {
        type: FETCHING_POKMON_SUCCESS,
        data
    }
}

export const getDataFailure = data => {
    return {
        type: FETCHING_POKMON_FALIURE,
        data
    }
}


export const fetchPokemon = (_url) => {
    return (dsipatch) => {
        dsipatch(getData())

        let id = _url.split('/')[6];
        let url = API_SOCKET + 'pokemon/' + id;

        fetch( url, {
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(dat => {
            dsipatch(getDataSuccess(dat))
          })
          .catch(error => console.warn(error));
    }
}