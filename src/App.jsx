import React from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Router from './components/Router/Router';

function App() {
  return (
    <div className="App">
      <Router path="/" Component={Home} />
      <Router path="/login" Component={Login} />
    </div>
  );
}

export default App;
