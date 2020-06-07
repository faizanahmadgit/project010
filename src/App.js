import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './New'
import New from './New';
import './exm.css'

function App({name, age} ) {
  return <div className='ok' >Hello from App.js updated {name} age = {age-10}
  <br />
   <New firstName={name} />
   </div>
}

export default App;
