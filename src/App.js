import React from 'react'
import VoterStatus from './components/VoterStatus';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ballot from './components/Party';
import Success from './pages/Success';


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
                <Route exact path='/voteOk'>
        < Success  />
                </Route>
            </Switch>
        </Router>
            
    )
}

export default App
