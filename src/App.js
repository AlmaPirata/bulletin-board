import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import CreateBulletinPage from "./components/CreatePage/CreatePage";
import Header from "./components/Header/Header";

function App() {
  return (
      <div className="app-wrapper">
        <Header/>
        <Route exact path='/' render={() => <MainPage/>} />
        <Route path='/add' render={() => <CreateBulletinPage/>} />
      </div>
  );
}

export default App;
