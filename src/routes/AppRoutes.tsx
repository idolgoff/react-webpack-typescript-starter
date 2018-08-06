import * as React from "react";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import { Page1, Page2 } from "@components";
import { AppTemplate } from "@components";


export const AppRoutes = ({}) => (
    <BrowserRouter>
        <AppTemplate>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </AppTemplate>
    </BrowserRouter>
);