import { useSelector } from 'react-redux';
import './App.css';
import React from 'react';


function App() {
  const user = useSelector((state)=>state.user)
  return (
    <div className="App">
       <header>
        <h1>Redux Tool</h1>
        <ul>
          <li>Name: {user.title}</li>
          <li>Email: {user.author}</li>
          <li>Username: {user.category}</li>
        </ul>
       </header>
    </div>
  );
}

export default App;
