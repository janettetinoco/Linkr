
import axios from 'axios';


export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const getUsersByCity = (city) => {
  return axios.post('ENTER ROUTE HERE', city).then(res => console.log(res),
  err => console.log(err.responseJSON))
};