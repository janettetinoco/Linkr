
import axios from 'axios';


export const getUsersByCity = (city) => {
  return axios.get('api/users', city).then(res => console.log(res),
  err => console.log(err.responseJSON))
};