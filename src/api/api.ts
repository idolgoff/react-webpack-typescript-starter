import {Communication} from "./Communication";

export default class Api extends Communication {

    // Test call
    test = () => this.call("https://jsonplaceholder.typicode.com/todos/1", {}, "GET")

    // Authorization
    login = (data: { userLogin: string, passwordHash: string }) => this.call("auth/authenticate", data);

    getApartmentInfo = () => this.needToken().call("apartment/get-info")

    addFileToTicket = ({ticket_id, file_name, file_base64}) => this.needToken().call("file/upload_file", {
        ticket_id,
        file_name,
        file_base64
    })
}

export const api = new Api()