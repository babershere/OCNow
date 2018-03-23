import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        window.localStorage.token
            ? <Component {...props} />
            : <Redirect to='/home' />
    )} />
)

export default PrivateRoute;