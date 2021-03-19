import { connect } from 'react-redux'; 
import { getSelf } from '../../actions/user_actions'
import Chat from './chat'


const mSTP = state => {
  const selfId = state.session.user.id
  const name = state.session.user.name
  // debugger
    return({
      selfId,
      name
    })
}

const mDTP = dispatch => {
    return ({
        getSelf: (selfId) => dispatch(getSelf(selfId)),
    })
}

export default connect(mSTP, mDTP)(Chat)