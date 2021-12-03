import { createWrapper } from "next-redux-wrapper";
import { createStore, compose, applyMiddleware, Middleware, StoreEnhancer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from './sagas';

const initialState = {};

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return compose(applyMiddleware(...middleware));
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store:any = createStore(rootReducer, initialState, bindMiddleware([...middleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper;