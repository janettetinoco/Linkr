
import * as APIutil from '../util/user_api_util';

export const usersToDisplay = (state) => {
  let allUsersInCity = Object.values(state.users);
  let connections = []; 
  if (state.connections) connections = state.connections;
  let pendings = []; 
  if(state.pendings) pendings = state.pendings;
  let blocks = []; 
  if (state.blocks) blocks = state.blocks;

  const display = allUsersInCity.filter( user=> {
    return (user._id !== state.session.user.id && !connections.includes(user._id) && !blocks.includes(user._id) && !pendings.includes(user._id))
  })
  return display; 
}

export const getUsersForConnections = state => {
  if(!state.connections) return [];
  let connections = [];
  state.connections.forEach( userId => {
    APIutil.getUser(userId).then( (user) => {
      connections.push(user.data);
    })
  }
  )
  return connections;
}