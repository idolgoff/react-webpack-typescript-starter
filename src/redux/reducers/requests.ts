import {REQUEST_DATA, RESPONSE_FAIL, RESPONSE_OK} from "@redux/actions/ActionTypes";

export const requests = (state = [], action) => {
    switch (action.type) {
        case REQUEST_DATA:
            // uniq array
            return [...state, action.requestType].filter((v, i, a) => a.indexOf(v) === i);
        case RESPONSE_FAIL:
        case RESPONSE_OK:
            let idx = state.indexOf(action.requestType)
            if (idx !== -1) {
                return [...state.slice(0, idx), ...state.slice(idx + 1)]
            }
            return state
        default:
            return state
    }
}

export const getIsLoading = state => !state.requests.length