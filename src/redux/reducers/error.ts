import {CLEAR_ERROR, RESPONSE_FAIL} from "@redux/actions/ActionTypes";

export const error = (state = "", action) => {
    switch (action.type) {
        case RESPONSE_FAIL:
            if (action.error)
                return action.error
            return state
        case CLEAR_ERROR:
            return ""
        default:
            return state;
    }
}

export const getError = state => state.error