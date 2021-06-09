import React from 'react';
import AppContextProvider from './utils/AppContext';
import AppContainer from './routes';

const App = () => {
  return (
    <AppContextProvider>
      <AppContainer />
    </AppContextProvider>
  );
};

export default App;