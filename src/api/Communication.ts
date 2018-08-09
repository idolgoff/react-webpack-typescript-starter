import axios from "axios";

export const paramsToString = (params) => {
    let paramUrl = [];
    Object.keys(params).map((key, index) => paramUrl.push(key + "=" + params[key]));
    return paramUrl.join("&");
};

class NullCommunication {
    call() {
        console.error("Need token");
        return new Promise((resolve, reject) => {
            reject("Need token");
        })
    }
}

export class Communication {

    protected server: string = "https://jsonplaceholder.typicode.com";

    protected token: string = null;

    setToken(value: string) {
        this.token = value;
        return this;
    }

    constructor(server: string = "") {
        this.server = server || this.server;
    }

    needToken() {
        if (this.token)
            return this;
        return new NullCommunication() as any;
    }

    call(route: string, allParams: any = {}, method = "POST") {

        let {
            server = null,
            ...params
        } = allParams

        /*
         * If route has it's own absolute url - use it instead of main server
         */
        const url = !(/^http/.test(route)) ?
            `${this.server}/${route}` + (this.token !== null ? `&token=${this.token}` : "") :
            `${route}`

        return new Promise(((resolve, reject) => {

            let responseData = null;

            const cmd = method === "POST" ? axios.post : axios.get
            cmd(url, params)
                .then(data => {
                    responseData = data.data

                    // Depends on server response object
                    // Can be valid response with error inside
                    // Talk to your backend developer
                    if (+responseData.error === 1) {
                        reject(responseData.message)
                    } else {
                        resolve(responseData)
                    }
                })
                .catch((error) => {
                    reject(error.message || error)
                    console.log(error)
                })
                .then((data) => {
                    //  console.log("always call", data)
                })

        }))
    }
}

