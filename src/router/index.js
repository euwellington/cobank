import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../backend/controller/private.router';

// PAGES PUBLIC
    import Home from '../pages/public/home';
    import Pix from '../pages/public/pix';
    import About from '../pages/public/about';
    import Account from '../pages/public/account';
    import Login from '../pages/public/login';
    import Register from '../pages/public/register';

// PAGES PRIVATE
    import PHome from '../pages/private/PHome';
    import PBalance from '../pages/private/PBalance';
    import AccountP from '../pages/private/PAccount';


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact={true} component={Home} />
                <Route path={'/pix'} component={Pix} />
                <Route path={'/sobre-nos'} component={About} />
                <Route path={'/conta'} component={Account} />
                <Route path={'/login'} component={Login} />
                <Route path={'/cadastro'} component={Register} />

                <PrivateRoute path={'/painel/home'} component={PHome} />
                <PrivateRoute path={'/painel/saldo'} component={PBalance} />
                <PrivateRoute path={'/painel/conta'} component={AccountP} />

            </Switch>
        </BrowserRouter>
    )
}

export default Router;