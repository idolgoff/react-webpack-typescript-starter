import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export const AppTopBar: React.SFC<{}> = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    App
                </Typography>
            </Toolbar>
        </AppBar>
    )
};