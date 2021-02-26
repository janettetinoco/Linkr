
import axios from 'axios';


export const filterUsersBy = (filter, value) => {
  return axios.get(`api/users/query/${filter}/${value}`)
};

export const getUser = (myId) => {
  return axios.get(`api/users/self/${myId}`)
};


export const completeProfile = (data) => {
  //example of data to HAVE the fields.

  // data = { 
    // id: '60382843998b440023b9a0d7',
    // occupation: 'CEO', 
    // aboutMe: 'Hello I am Russel, whats up', 
    // education: ['PhD in Physics, UCLA', "Nano Tech" ], 
    // linkedIn: 'some/http.com', 
    // image_url: 'some_url.com' 
  // } 
  return axios.patch('/api/users/completeProfile', data)
}
