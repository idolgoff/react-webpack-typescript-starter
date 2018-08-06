import * as React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router"

const pages = ["/page1", "/page2"]

const onChangeHandler = history => (event, value) => {
    history.push(pages[value])
}

const BottomNavigationBar: React.SFC<{ classes, location, history }> = ({
    classes,
    location,
    history
}) => {

    return (
        <div className={classes.root}>
            <BottomNavigation
                showLabels
                value={pages.indexOf(location.pathname)}
                onChange={onChangeHandler(history)}
            >
                <BottomNavigationAction label="Page1" />
                <BottomNavigationAction label="Page2" />
            </BottomNavigation>
        </div>
    )
};

export default withRouter(withStyles({
    root: {
        position: "fixed",
        bottom: 0,
        width: "100%",
    }
})(BottomNavigationBar) as any)