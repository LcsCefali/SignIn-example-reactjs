import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;