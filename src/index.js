import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//Provider class component giving access to Store & Providers, wrapping all App
import { Provider } from 'react-redux';

//for Redux Peristance:
import { PersistGate } from 'redux-persist/integration/react';
//store created from all Reducers combined + Middlewares
//persistor for Redux Peristance: =persistStore(store)
import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(

  <Provider store={store}> {/*store dispatched on all App*/}
    <BrowserRouter>
      <PersistGate persistor={persistor}>
      {/*persistor = cached version of store, created in store.js*/}
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root')

);

