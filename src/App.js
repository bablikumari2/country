import React from 'react';
import {Routes , Route} from 'react-router-dom'
import './App.css';
import { AddCity } from './components/AddCity';
import { AddCountry } from './components/AddCountry';
import { Home } from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add-country' element={<AddCountry/>}></Route>
        <Route path='/add-city' element={<AddCity/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
