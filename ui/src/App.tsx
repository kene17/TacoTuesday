import React from 'react';
import './App.css';
import { Header } from './components';
import { HomePage } from './pages';

function App() {
  return (
    <div className="main-container">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
