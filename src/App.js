import React, {createContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminEvent from './Components/AdminEvent/AdminEvent';
import RegisterVolunteer from './Components/RegisterVolunteer/RegisterVolunteer';
import NoMatch from './Components/NoMatch/NoMatch';
import RegisteredEvent from './Components/RegisteredEvent/RegisteredEvent';
import Header from './Components/Header/Header';

export const UserContext = createContext()

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/adminEvent'>
            <AdminEvent></AdminEvent>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/header">
            <Header></Header>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/adminEvent'>
            <AdminEvent></AdminEvent>
          </Route>
          <PrivateRoute path='/registerVolunteer/:id'>
            <RegisterVolunteer></RegisterVolunteer>
          </PrivateRoute>
            <PrivateRoute path='/registeredEvent'>
          </PrivateRoute>
          <Route path='/registeredEvent'>
                <RegisteredEvent></RegisteredEvent>
          </Route>         
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
