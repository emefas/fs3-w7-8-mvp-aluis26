import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataContainer from './components/DataContainer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';


function App(){
    return(
        <div>
            <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
            <DataContainer/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;