import * as actionTypes from './actions';

export const profileMouseOver = () => {
    return {
        type: actionTypes.PROFILE_MOUSE_OVER
    };
};

export const profileMouseOut = () => {
    return {
        type: actionTypes.PROFILE_MOUSE_OUT
    }
}