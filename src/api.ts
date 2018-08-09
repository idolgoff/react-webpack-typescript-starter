import axios from "axios";

declare const $: any

const paramsToString = (params) => {
    let paramUrl = [];
    Object.keys(params).map((key, index) => paramUrl.push(key + "=" + params[key]));
    return paramUrl.join("&");
};

class NullCommunication {
    call() {
        console.error("Need token");
        let d = $.Deferred();
        d.reject();
        return d as any;
    }
}

class Communication {

    protected server: string = "https://jsonplaceholder.typicode.com";

    protected ghostToken: string = null;
    protected token: string = null;

    public setToken(value: string) {
        this.token = value;
        return this;
    }

    constructor(server: string = "") {
        this.server = server || this.server;
    }

    needToken() {
        if (this.token) {
            return this;
        }
        // alert("No token!")
        return new NullCommunication() as any;
    }

    call(route: string, allParams: any = {}, method = "POST") {

        let {
            server = null,
            ...params
        } = allParams


        // console.log("server", server, route);
        /*
         * If route has it's own absolute url - use it instead of main server
         */
        const url = !(/^http/.test(route)) ?
            `${this.server}/${route}` + (this.token !== null || this.ghostToken !== null ? `&token=${this.token || this.ghostToken}` : "") :
            `${route}`

        // console.log("params", this.server, url);

        let d = $.Deferred() as any

        const cmd = method === "POST" ? axios.post : axios.get
        cmd(url, params)
            .then(data => {
                // console.log("$.post:", data)
                d.data = data.data
                if (+data.data.error === 1) {
                    d.reject(data.data.message)
                } else {
                    d.resolve(data.data)
                }
            })
            .catch((error) => {
                if (error === 0)
                    d.error = "unauthorized"
                else
                    d.error = data.statusText
                // d.reject(d.error)
                d.resolve(null)
                console.log(d.error)
            })
            .then((data) => {
               //  console.log("always call", data)
            })

        return d as any
    }
}

export default class Api extends Communication {

    test = () => this.call("todos/1")

    // Authorization
    login = (data: {userLogin: string, passwordHash: string}) => this.call("auth/authenticate", data);

    getApartmentInfo = () => this.needToken().call("apartment/get-info")

    addFileToTicket = ({ticket_id, file_name, file_base64}) => this.needToken().call("file/upload_file", {ticket_id, file_name, file_base64})
}

export const api = new Api()