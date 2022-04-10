import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="grow" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;