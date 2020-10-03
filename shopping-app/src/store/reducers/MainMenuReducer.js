import * as actionTypes from '../actions/actions';

const initialState = {
    showMenu: false
}

const mainMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.MAIN_MENU_MOUSE_OVER):
            console.log(action.type);
            return {
                ...state, showMenu: true
            }
        case (actionTypes.MAIN_MENU_MOUSE_OUT):
            console.log(action.type);
            return {
                ...state, showMenu: false
            }
        default:
            console.log('No action required')
    }
    return state;
};

export default mainMenuReducer;