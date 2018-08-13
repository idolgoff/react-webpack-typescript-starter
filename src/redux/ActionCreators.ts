import * as snake from "to-snake-case";
import {CLEAR_ERROR, REQUEST_DATA, RESPONSE_FAIL, RESPONSE_OK} from "./actions/ActionTypes"
import {api} from "../api/api";

export const requestData = (dispatch, requestType = null) => {
    dispatch({
        type: REQUEST_DATA,
        requestType
    })
}

export const responseFail = (dispatch, error, requestType = null) => {
    dispatch({
        type: RESPONSE_FAIL,
        error,
        requestType
    })
}

export const responseOk = (dispatch, requestType = null) => {
    dispatch({
        type: RESPONSE_OK,
        requestType
    })
}

export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERROR
    })
}

interface IRequestAction {
    request: any
    requestType: string
    actionType?: string
    extraAction?: (...params) => any
    payload?
    response?: (response) => any
}

export const requestAction =
    ({
         request,
         requestType,
         actionType = "",
         extraAction = null,
         payload = null,
         response = null,
     }: IRequestAction) => (...params) => dispatch => {
        // console.log("===> requestAction actionType", actionType)

        requestData(dispatch, requestType)
        return request(...params)
            .then(
                responseData => {
                    responseOk(dispatch, requestType)

                    if (actionType) {
                        let action = {
                            type: actionType,
                        }
                        if (payload && typeof payload === "function")
                            action = {...action, ...payload(...params)}
                        if (response && typeof response === "function")
                            action = {...action, ...(response(responseData))}
                        else
                            action = {...action, ...responseData}

                        dispatch(action)
                    }

                    if (extraAction)
                        dispatch(extraAction(...params, ...responseData))
                },
                error => responseFail(dispatch, error, requestType)
            )
    }

interface IParams {
    actionType?
    extraAction?
    response?
    payload?
}

export const requestWithApi = api =>
    (actionName: string,
     params: IParams = {
         actionType: null,
         extraAction: null,
         response: null,
         payload: null
     }) => {
        // console.log("actionType:", params.actionType ? params.actionType : snake(actionName).toUpperCase())
        return requestAction({
            requestType: actionName,
            request: api[actionName],
            actionType: params.actionType ? params.actionType : snake(actionName).toUpperCase(),
            extraAction: params.extraAction,
            response: params.response,
            payload: params.payload,
        })
    }

export const apiActionCreator = requestWithApi(api)

export const simpleActionCreator = actionName => params => dispatch => {
    const action = {
        type: snake(actionName).toUpperCase(),
        ...params
    }
    return dispatch(action)
}