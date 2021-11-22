import { createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore, compose, applyMiddleware, Middleware, StoreEnhancer, Store, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";

const initialState = {};

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return compose(applyMiddleware(...middleware));
}

const configureStore: any = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(reducers, initialState, bindMiddleware([...middleware]));
  // sagaMiddleware.run(rootSaga);
  return store;
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper;