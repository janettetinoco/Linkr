import {connect} from 'react-redux'; 
import MyProfile from './my_profile';
import {getSelf} from '../../actions/user_actions'
import {updateProfile} from '../../actions/profile_actions'
import { uploadImage } from '../../actions/image_actions';

const mSTP = state => {
    return({
        self: state.users[state.session.user.id],
        myId: state.session.user.id

    })
}

const mDTP = dispatch => {
    return ({
        getSelf: (selfId) => dispatch(getSelf(selfId)),
        updateProfile: (data) => dispatch(updateProfile(data)),
        uploadImage: image => dispatch(uploadImage(image)),
    })
}

export default connect(mSTP, mDTP)(MyProfile)