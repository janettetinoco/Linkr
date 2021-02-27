import * as APIUtil from '../util/connections_api_util';

export const CREATE_CONNECTION = "CREATE_CONNECTION"; 
export const RECEIVE_CONNECTIONS = "RECEIVE_CONNECTIONS";
export const RECEIVE_BLOCKS = "RECEIVE_BLOCKS";
export const RECEIVE_PENDINGS = "RECEIVE_PENDINGS"; 

export const receiveConnections = (connections) => ({
  type: RECEIVE_CONNECTIONS,
  connections
});


export const receiveBlocks = (blocks) => ({
  type: RECEIVE_BLOCKS,
  blocks
});

export const receivePendings = (pendings) =>({
  type: RECEIVE_PENDINGS,
  pendings
});


//create a connection between currentUser and user being swiped on 
export const createConnection = (currUserId, otherUserId, status) => dispatch => {
  return APIUtil.connectUser(currUserId, otherUserId, status);
}

export const getBlocked = (selfId) => dispatch => {
    return APIUtil.getBlocked(selfId).then((blocks) => {
      dispatch(receiveBlocks(blocks));
    })
};
export const getConnected = (selfId) => dispatch => {
    return APIUtil.getConnected(selfId).then((connections) => {
      dispatch(receiveConnections(connections));
    })
};
export const getPending = (selfId) => dispatch => {
    return APIUtil.getPending(selfId).then((pendings) => {
      dispatch(receivePendings(pendings));
    })
};
