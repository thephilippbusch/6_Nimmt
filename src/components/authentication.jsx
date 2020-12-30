import React, { useContext, createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from 'react-router-dom';

const fakeAuth = {
    isAuthentication: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
    },
    signout(cb) {
        fakeAuth.isAuthenticated = true;
    }
};

const authContext = createContext();

const useProvideAuth = () => {
    const [user, setUser] = useState();
    const [email, setEmail] = useState();

    const signin = cb => {
        return fakeAuth.signin(() => {
            setUser('User');
            setEmail('mail@mail.com');
            cb();
        });
    };

    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            setEmail(null);
            cb();
        });
    };

    return (
        signin,
        signout,
        user,
        email
    );
}

const useAuth = () => {
    return useContext(authContext);
}

const AuthButton = () => {
    let history = useHistory();
    let auth = useAuth();

    return auth.user ? (
        <button onClick={() => {
            auth.signout(() => history.push("/login"));
        }}>
            Sign Out
        </button>
    ) : (
        <p>You're not logged in!</p>
    )
}

const PrivateRoute = (props, {children, ...rest}) => {
    const auth = props.auth;

    return(
        <Route 
            {...rest}
            render={({ location }) => 
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return(
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

export { AuthButton, ProvideAuth, PrivateRoute };