
import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from '.Home';
import PageNotFound from './404Page';
 
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}
 
export default App;
