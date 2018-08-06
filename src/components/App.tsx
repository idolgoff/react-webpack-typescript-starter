import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import { AppRoutes } from "@routes";

import "@assets/stylus/style.styl";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <AppRoutes />
        );
    }
}
