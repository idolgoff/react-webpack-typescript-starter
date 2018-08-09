import { combineReducers } from "redux";

import {requests} from "@redux/reducers/requests";
import {error} from "@redux/reducers/error";

export default combineReducers({requests, error})