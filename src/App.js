import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DataContainer from './components/DataContainer';
import  Navigation from './components/ Navigation';
import Home from './components/Home';
import DataView from './components/DataView';
import Dashboard from './components/Dashboard';


function App(){
    return(
        <div>
            <Navigation />
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dataview" component= {DataView} />
                <Route path="/dashboard" component= {Dashboard} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;