import * as React from "react";
import {connect} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "@routes";
import {test} from "@redux/actions/TestActions"

import "@assets/stylus/style.styl";

export interface AppProps {
    test
}

class App extends React.Component<AppProps, undefined> {

    componentDidMount() {
        console.log("It did mount");
        this.props.test();
    }

    render() {
        return (
            <AppRoutes/>
        );
    }
}

const mapStateToProps = state => ({
    // config: getConfig(state)
})

export default connect(mapStateToProps, {
    test
})(App)