import React from 'react';
import './App.css'
import navLogo from './images/logo192.png';
import Header from './components/Header';





function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main-one'>
        <h1>Fun Facts About React!</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was  originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>It's well maintained by facebook</li>
          <li>Powers thousands of enterprices apps, including mobile apps</li>
        </ul>
      </main>
      
    </div>
  );
}




export default App;
