import { createStore } from 'redux';
import reducer from './reducer';

import React from 'react';
import Counter from './cmponents/counter';

import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import App from './cmponents/App';

const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const update = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );

}
update();

// store.subscribe(update);
// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });


// ReactDOM.render(<Counter />, document.getElementById('root'));
