import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const defaultMiddlewares = [
    thunkMiddleware,
    logger
];

export default (rootReducer, middlewares = defaultMiddlewares) => {
    return (function configureStore(initialState) {
        const store = createStore(rootReducer, initialState, compose(
            applyMiddleware(...middlewares),
            window.devToolsExtension ? window.devToolsExtension() : (f) => f
        ));
        return store;
    })();
};
