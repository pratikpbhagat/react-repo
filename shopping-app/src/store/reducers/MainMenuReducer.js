import * as actionTypes from '../actions/actions';

const initialState = {
    showMenu: false,
    menuItem: ''
}

const mainMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.MAIN_MENU_MOUSE_OVER):
            let menuItem = '';
            switch (action.link) {
                case ('/men'):
                    menuItem = '/men';
                    break;
                case ('/women'):
                    menuItem = '/wommen';
                    break;
                case ('/kids'):
                    menuItem = '/kids';
                    break;
                case ('/home-living'):
                    menuItem = '/home-living';
                    break;
                case ('/offers'):
                    menuItem = '/offers';
                    break;
                default:
                    menuItem = '';
            }
            return {
                ...state, showMenu: true, menuItem: menuItem
            }
        case (actionTypes.MAIN_MENU_MOUSE_OUT):
            return {
                ...state, showMenu: false
            }
        default:
            console.log('No action required');
    }
    return state;
};

export default mainMenuReducer;