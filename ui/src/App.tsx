import React from 'react';
import './App.css';
import { AllRoutes } from './routes';
import { UserContextProvider } from './store';

function App() {
  return (
    <main className="main-container">
      <UserContextProvider>
        <AllRoutes />
      </UserContextProvider>
    </main>
  );
}

export default App;
