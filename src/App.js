//   name   :   app        //
//   author :  suman      //
//   Date   : 18/08/2021  //

import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AddEditUser from "./pages/addedituser/AddEditUser";
import UserInfo from "./pages/userinfo/UserInfo";
import About from "./pages/about/About";
import Header from "./component/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/addUser" component={AddEditUser} />
          <Route path="/editUser/:id" component={AddEditUser} />
          <Route path="/userInfo/:id" component={UserInfo} />
       
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
