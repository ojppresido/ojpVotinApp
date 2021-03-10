import React from 'react'
import VoterStatus from './components/VoterStatus';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ballot from './components/Party';


const App = () => {

   
    return (
        <Router >
            <Switch>
                <Route exact path='/'>
        < VoterStatus />
                </Route>
                <Route exact path='/vote'>
        < Ballot  />
                </Route>
            </Switch>
        </Router>
            
    )
}

export default App
