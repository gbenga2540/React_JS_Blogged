// import React from 'react';
// import App from './App/App';
// import './index.scss';
// import './Fonts/Fonts.scss';
// import './Utils/Colors/Colors.scss';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store, { persistedStore } from './Configs/Redux_Store';
// import { PersistGate } from 'redux-persist/integration/react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <PersistGate persistor={persistedStore}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </BrowserRouter>
// );

import React from 'react';
import App from './App/App';
import './index.scss';
import './Fonts/Fonts.scss';
import './Utils/Colors/Colors.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Configs/Redux_Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);