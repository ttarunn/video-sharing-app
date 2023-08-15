import { createContext, useState } from 'react';
import './App.css';

import Router from './components/Routes/Router';
import { Provider } from 'react-redux';
import store from './components/utils/store';

export const authContext = createContext();

function App() {
  const [login, setLogin] = useState(false)
  return (
    <>
    <Provider store={store}>
      <Router/>
    </Provider>
    </>
    
  );
}

export default App;
