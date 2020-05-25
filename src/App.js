import React from 'react';
import {Router,Redirect,Route} from 'react-router-dom'
import history from './Components/History'
import Login from './Components/Login.js'
import ChatRoom from './Components/ChatRoom.js'

function App() {
  return (
   <Router history={history}>
     <Redirect exact from="/" to="/login"/>
     <Route path="/login" exact component={Login}/>
     <Route path="/chatroom" exact component={ChatRoom}/>
   </Router>
  );
}

export default App;
