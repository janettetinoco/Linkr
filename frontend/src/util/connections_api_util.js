export const getConnected = (user) => {
  return axios.get("/api/connections/connected", user);
};
