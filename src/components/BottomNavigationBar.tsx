import * as React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

export const BottomNavigationBar: React.SFC<{}> = () => {
    return (
        <BottomNavigation
            showLabels
        >
            <BottomNavigationAction label="Page1" />
            <BottomNavigationAction label="Page2" />
        </BottomNavigation>
    )
};