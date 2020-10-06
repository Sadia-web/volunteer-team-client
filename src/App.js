import React, {createContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NoMatch from '/Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminEvent from './Components/AdminEvent/AdminEvent';
import RegisterVolunteer from './Components/RegisterVolunteer/RegisterVolunteer';
import RegisteredEvent from '/Components/RegisteredEvent/RegisteredEvent';

export const UserContext = createContext()

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='*'>
            <NoMatch/>
          </Route>
          <Route path='/adminEvent'>
            <AdminEvent></AdminEvent>
          </Route>
          <PrivateRoute path='/registerVolunteer/:id'>
            <RegisterVolunteer></RegisterVolunteer>
          </PrivateRoute>
          <PrivateRoute path='/registeredEvent'>
            <RegisteredEvent></RegisteredEvent>
          </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
