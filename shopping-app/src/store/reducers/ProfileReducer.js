import * as actionTypes from '../actions/actions';
// import { updateObject } from '../Utility';

const initialState = {
    profileShow: false
}

const profileReducer = (state = initialState, action) => {
    console.log('action.type - ' + action.type);
    switch (action.type) {
        case (actionTypes.PROFILE_MOUSE_OVER):
            return {
                ...state, profileShow: true
            }
        case (actionTypes.PROFILE_MOUSE_OUT):
            return {
                ...state, profileShow: false
            }
        default:
            return state;
    }
};

export default profileReducer;