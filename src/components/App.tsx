import * as React from "react";
import Camera from "react-feather/dist/icons/camera";

import "./../assets/scss/App.scss";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <Camera color={"red"} size={48} />
                <h1>Hello World!</h1>
                <p>Foo to the barz</p>
            </div>
        );
    }
}
