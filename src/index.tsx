import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {AppContainer} from "react-hot-loader";
import {store} from "@redux/reducer";
import App from "./components/App";

const rootEl = document.getElementById("root");

render(
    <Provider store={store}>
        <AppContainer>
            <App/>
        </AppContainer>
    </Provider>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NewApp = require("./components/App").default;

        render(
            <Provider store={store}>
                <AppContainer>
                    <NewApp/>
                </AppContainer>
            </Provider>,
            rootEl
        );
    });
}
