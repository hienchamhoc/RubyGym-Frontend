import * as Types from '../constants/ActionTypes'

export const actHideHeader = () => {
    return {
        type: Types.HIDE_HEADER
    }
}

export const actShowHeader = () => {
    return {
        type: Types.SHOW_HEADER
    }
}