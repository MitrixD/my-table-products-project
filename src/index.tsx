import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import App from './App';

const store = setupStore();

const container = document.getElementById('root');
if (!container) {
  throw new Error('Container not found!');
}
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
