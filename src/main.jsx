import React, {useState} from 'react';
import HomePage from './pages/main-router/homepage';
import Game from './pages/game/game';
import NewGame from './pages/main-router/newGame';
import LoadGame from './pages/main-router/loadGame';
import LoginPage from './pages/main-router/login';
import SignUpPage from './pages/main-router/signup'; 
import Header from './pages/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth, PrivateRoute } from './components/authentication';

const Main = () => {
    const [auth, setAuth] = useState(false);

    return (
        <ProvideAuth>
            <Router>
                <Header />

                <Switch>
                    <Route exact path='/'>
                        <Game />
                    </Route>
                    <Route path='/login'>
                        <LoginPage />
                    </Route>
                    <Route path='/signup'>
                        <SignUpPage />
                    </Route>
                    <Route path='/newgame'>
                        <NewGame />
                    </Route>
                    <Route path='/loadgame'>
                        <LoadGame />
                    </Route>
                    <Route path='/game'>
                        <Game />
                    </Route>
                </Switch>
            </Router>
        </ProvideAuth>
    )
}

export default Main;