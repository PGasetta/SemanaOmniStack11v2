import React, { useState } from 'react';
import './global.css';

import Routes from './routes';
import { Route } from 'react-router-dom';


function App() {
  
  /*
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>
        Semana OmniStack 11 - Contador: {counter}
      </Header> 
      <button onClick={increment}>Incrementar</button>
    </div>
  );
    // { #001--
    //  <Header title="Semana OmniStack 11"/>
    // --#001 }  
  */
 return (
   <Routes/>
 );
}

export default App;
