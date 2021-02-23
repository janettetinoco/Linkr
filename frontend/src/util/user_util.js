
import axios from 'axios';


export const getUsersByCity = (city) => {
  return axios.post('ENTER ROUTE HERE', city).then(res => console.log(res),
  err => console.log(err.responseJSON))
};