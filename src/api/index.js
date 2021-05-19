import { API_SOCKET } from '../config/constants';

/*export const getClienGeoData = async () => {
    let url = API_SOCKET + '/public/geodata';
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(dat => dat.json())
    .then(response => {
        return response;
    })
    .catch(error => console.warn(error));
}*/

export const getGeoData = async (_query, callback) => {
  let url = API_SOCKET + '/public/geodata';

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(_query),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(responseData => responseData.json())
    .then(data => {
      console.log("data")
      console.log(data)

      callback(data)
    })
    .catch(error => console.log("error en la api"));
}

export const enableUser = async (_activation_id, callback) => {

  let url = API_SOCKET + '/public/enableUser/' + _activation_id;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(data => {
      console.log("data")
      console.log(data)

      callback(data.status)
    })
    .catch(error => console.log("error en la api"));
}
