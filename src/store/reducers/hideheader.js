import * as Types from '../constants/ActionTypes'

const initialState = false;

const hideheader = (state = initialState, action) => {
    switch (action.type) {
        case Types.HIDE_HEADER:
            return true;
        case Types.SHOW_HEADER:
            return false;
        default:
            return state;
    }
}

export default hideheader;