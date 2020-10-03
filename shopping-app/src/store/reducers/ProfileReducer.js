
const initialState = {
    profileShow: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('MOUSE_ENTER'):
            return {
                ...state, profileShow: true
            }
        case ('MOUSE_OUT'):
            return {
                ...state, profileShow: false
            }
        default:
            return {
                ...state, profileShow: false
            }
    }
    // return state;
};

export default profileReducer;