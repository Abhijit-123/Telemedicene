import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <Switch>
      <Route exact path= '/Login' component={Login} />
      <Route exact path= '/' component={Signup} />
    </Switch>
    {/* <Signup /> */}
    {/* <Login/> */}
    </>
  );
}

export default App;
