import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//Provider class component giving access to Store & Providers, wrapping all App
import { Provider } from 'react-redux';
//store create from all Reducers combined + Middlewares
import store from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(

  <Provider store={store}> {/*store dispatched on all App*/}
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>

 , document.getElementById('root')

);

