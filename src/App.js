import React from "react";
/*import './App.css';*/
import {Routes,Route,Navigate} from "react-router-dom";
import Navbar from "./component/navbar";
import View from "./component/view";
import Create from "./component/create";
import Edit from "./component/edit";
import SignUp from "./component/signup";

let App = () => {
  return (
    <React.Fragment>
        <Navbar></Navbar>
    <Routes>
        <Route path={'/'} element={<Navigate to={'/create'}/>}/>
        <Route path={'/view-list'} element={<View/>} />
        <Route path={'/create'} element={<Create/>} />
        <Route path={'/edit/:uid'} element={<Edit/>} />
        <Route path={'/sign-up'} element={<SignUp/>}/>
    </Routes>
    </React.Fragment>
  );
}

export default App;
