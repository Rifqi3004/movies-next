import {  createStore } from 'redux'
import reducers from "./reducers"
import middlewares from './middlewares';

export const initStore = (reducers, initialState) => {
    return createStore(reducers, initialState, middlewares);

};

export const makeStore = (initialState, {isServer, req, debug, storeKey}) => {

    if (isServer) {

        initialState = initialState || {fromServer: 'foo'};

        return initStore(reducers, initialState);

    } else {

        // we need it only on client side
        const {persistStore, persistReducer} = require('redux-persist')
        const storage = require('redux-persist/lib/storage').default;

        const persistConfig = {
            key: 'nextjs',
            whitelist: ['auth'], // make sure it does not clash with server keys
            storage
        };

        const persistedReducer = persistReducer(persistConfig, reducers);
        const store = initStore(persistedReducer, initialState);

        store.__persistor = persistStore(store); // Nasty hack

        return store;
    }
};
