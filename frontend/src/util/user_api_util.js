
import axios from 'axios';


export const filterUsersBy = (filter, value) => {
  return axios.get(`api/users/${filter}/${value}`, {})
  .then(res => console.log(res),
  err => console.log(err.responseJSON))
};