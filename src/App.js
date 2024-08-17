import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Crud from './CrudForm/Crud';
import Update from './CrudForm/Update';
import Registration from './RegisLogin/Registration';
import Login from './RegisLogin/Login';

function App() {
  return (
  <Fragment>
 
  <Routes>
     {/*<Route  path="/update/:id" element = {<Update/>}/>
      <Route path="/" element = {<Crud/>}/>*/}

<Route path='/' element = {<Registration/>}/>
<Route path='/login' element = {<Login/>}/>



  </Routes>

  </Fragment>
  );
}

export default App;
