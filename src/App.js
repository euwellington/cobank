import React from 'react';
import Router from './router';
import { UserProvider } from './backend/contextAPI';

const App = () => {
  return (
    <UserProvider>
      <Router/>
    </UserProvider>
  );
}

export default App;