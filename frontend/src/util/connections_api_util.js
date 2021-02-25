import axios from 'axios';



export const getConnected = (currUserId) => {
  return axios.get("/api/connections/connected", {params: {id: currUserId }});
};
