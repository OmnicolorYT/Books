import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {store, persistor} from "./store/store";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import styles from './index.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
              <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>
);