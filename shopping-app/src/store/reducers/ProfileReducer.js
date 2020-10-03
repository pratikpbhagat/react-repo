import * as actionTypes from '../actions/actions';

const initialState = {
    profileShow: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.PROFILE_MOUSE_OVER):
            console.log(action.type);
            return {
                ...state, profileShow: true
            }
        case (actionTypes.PROFILE_MOUSE_OUT):
            console.log(action.type);
            return {
                ...state, profileShow: false
            }
        default:
            console.log('No action required');
    }
    return state;
};

export default profileReducer;