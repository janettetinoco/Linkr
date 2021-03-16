import * as ImageUtil from '../util/image_util';

export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGE_ERRORS = "RECEIVE_IMAGE_ERRORS";
export const RECEIVE_POST_IMAGES = "RECEIVE_POST_IMAGES";

const receiveImage = (image) => {
    return {
        type: RECEIVE_IMAGE,
        image
    };
};



const receiveImageErrors = (errors) => {
    return {
        type: RECEIVE_IMAGE_ERRORS,
        errors
    };
};




export const uploadImage = (data) => (dispatch) => {
    debugger
    return ImageUtil.uploadImage(data)
     .then((image) => dispatch(receiveImage(image)))
     .catch(err => dispatch(receiveImageErrors(err)));
};