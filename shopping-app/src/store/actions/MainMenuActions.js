import * as actionTypes from './actions';

export const mainMenuMouseOver = (link) => {
    return {
        type: actionTypes.MAIN_MENU_MOUSE_OVER,
        link: link
    }
};

export const mainMenuMouseOut = () => {
    return {
        type: actionTypes.MAIN_MENU_MOUSE_OUT
    }
};