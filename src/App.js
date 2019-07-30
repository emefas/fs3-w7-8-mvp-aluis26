import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DataContainer from './components/DataContainer';
import  Navigation from './components/ Navigation';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Chart from './components/Chart';


function App(){
    return(
        <div>
            < Navigation />
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/chart" component={Chart} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;