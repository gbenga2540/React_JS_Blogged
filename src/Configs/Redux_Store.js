// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import rootReducer from "../Redux/Reducers/index";

// const persistConfig = {
//     key: 'Blogged_Storage',
//     storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = configureStore({ reducer: persistedReducer, middleware: [] });
// const persistedStore = persistStore(store);

// export default store;
// export { persistedStore };

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../Redux/Reducers/index";

const store = configureStore({ reducer: rootReducer, middleware: [] });

export default store;
