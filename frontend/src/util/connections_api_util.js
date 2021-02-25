import axios from 'axios';



export const getConnected = (selfId) => {
  return axios.get("/api/connections/connected", {params: {id: selfId }});
};

export const getBlocked = (selfId) => {
  return axios.get("/api/connections/blocked", {params: {id: selfId}})
}

export const getPending = (selfId) => {
  return axios.get("/api/connections/pending", {params: {id: selfId}})
}

export const connectUser = (selfId, otherUserId, status) => {
  return axios.post("/api/connections/create", {id1: selfId, id2: otherUserId, status });
}