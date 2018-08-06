import * as React from "react";
import { Link } from "react-router-dom";
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { AppTopBar, BottomNavigationBar } from "@components";

const muiTheme = createMuiTheme();

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const AppTemplate: React.SFC<{ classes }> = ({
    classes,
    children = null,
}) => {
    return (
        <MuiThemeProvider theme={muiTheme}>
            <CssBaseline />
            <AppTopBar />
                {children}
            <BottomNavigationBar />
        </MuiThemeProvider>
    )
};

export default withStyles(styles)(AppTemplate)