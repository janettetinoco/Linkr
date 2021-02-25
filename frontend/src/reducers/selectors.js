

export const usersToDisplay = (state) => {
  let allUsersInCity = Object.values(state.users);
  console.log(state)
  let connections = []; 
  if (state.connections) connections = state.connections;
  let pendings = []; 
  if(state.pendings) pendings = state.pendings;
  let blocks = []; 
  if (state.blocks) blocks = state.blocks;

  const display = allUsersInCity.filter( user=> {
    return (!connections.includes(user._id) && !blocks.includes(user._id) && !pendings.includes(user._id))
  })
  console.log("display these users", display); 
  return display; 
}