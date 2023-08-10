import { createContext, useState } from 'react';
import './App.css';

import Router from './components/Routes/Router';

export const authContext = createContext();

function App() {
  const [login, setLogin] = useState(false)
  return (
    <>
    <authContext.Provider value={{login, setLogin}}>
      <Router/>
    </authContext.Provider>
    </>
    
  );
}

export default App;
