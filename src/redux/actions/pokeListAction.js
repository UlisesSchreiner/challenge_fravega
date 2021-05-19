import { FETCHING_POKELIST, FETCHING_POKELIST_SUCCESS, FETCHING_POKELIST_FALIURE } from '../constants';
import {API_SOCKET} from '../../config/constants';

export const getData = () => {
    return {
        type: FETCHING_POKELIST
    }
}

export const getDataSuccess = data => {
    return {
        type: FETCHING_POKELIST_SUCCESS,
        data
    }
}

export const getDataFailure = data => {
    return {
        type: FETCHING_POKELIST_FALIURE,
        data
    }
}


export const fetchInformation = (offset) => {
    return (dsipatch) => {
        dsipatch(getData())

        let url = API_SOCKET + 'ability/?limit=5&offset=' + offset;
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