import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';




function App() {
  return (
    <div className="App ">
      <Header className = "" ></Header>
      <Home></Home>
    </div>
  );
}

export default App;
