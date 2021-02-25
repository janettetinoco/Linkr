
import axios from 'axios';


export const filterUsersBy = (filter, value) => {
  return axios.get(`api/users/query/${filter}/${value}`)
};

export const getCurrentUser = (myId) => {
  return axios.get(`api/users/self/${myId}`)
};


// export const getConnected = (user) => {
//   return axios.get('/api/users/connected', user)
// }