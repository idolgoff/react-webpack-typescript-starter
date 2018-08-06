import * as React from "react";
import {Link} from "react-router-dom";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BottomNavigationBar } from "@components";

const muiTheme = createMuiTheme();

export const AppTemplate: React.SFC<{}> = ({
    children = null,
}) => {
    return (
        <MuiThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
            <BottomNavigationBar/>
        </MuiThemeProvider>
    )
};