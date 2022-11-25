import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
    )
);

sagaMiddleware.run(rootSaga);

export { store }