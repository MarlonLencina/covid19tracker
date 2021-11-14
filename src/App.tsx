import React from 'react';
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Search from './pages/search';
import Statistics from './pages/statistics';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Search} />
                    <Route path="/result/:country" component={Statistics} />
                </Switch>
            </BrowserRouter>
            <GlobalStyle />
        </div>
    );
}

export default App;
