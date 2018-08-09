import {apiActionCreator} from "@redux/ActionCreators";

export const test = apiActionCreator("test", {
    response: data => ({data})
})
