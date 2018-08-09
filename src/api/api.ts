import {Communication} from "./Communication";

export default class Api extends Communication {

    // Test call
    test = () => this.call("https://jsonplaceholder.typicode.com/todos/1", {}, "GET")

    // Authorization
    login = (data: { userLogin: string, passwordHash: string }) => this.call("auth/authenticate", data);

}

export const api = new Api()