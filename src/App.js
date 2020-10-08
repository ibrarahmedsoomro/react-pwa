import React from 'react';
import './App.css';
import {initNotification} from './Services/FirebaseServices'

function App() {
  return (
    <div className="App">
     <h1>Hello world</h1>
     <button onClick={initNotification}>Configure</button> 
    </div>
  );
}

export default App;
 