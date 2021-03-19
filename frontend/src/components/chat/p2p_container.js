import { connect } from 'react-redux'; 
import PeerChat from './chat_p2p'


const mSTP = state => {
  const selfId = state.session.user.id
  const name = state.session.user.name

  debugger
    return({
      selfId,
      name
    })
}

const mDTP = dispatch => {
    return ({

    })
}

export default connect(mSTP, mDTP)(PeerChat)