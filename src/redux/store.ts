import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { RootReducer, State } from './root.reducer';
import { RootSaga } from './root.saga';

// redux-saga
const sagaMiddleWare = createSagaMiddleware();

// redux-logger
const reduxLogger = createLogger({
  collapsed: true,
  diff: true,
  duration: true,
});

// ストア生成
const ConfigureStore = (preloadState?: State) => {
  const middleware = [reduxLogger, sagaMiddleWare];
  const middlewareEnhancer = applyMiddleware(...middleware);
  const store = createStore(
    RootReducer(),
    preloadState,
    middlewareEnhancer
  );
  sagaMiddleWare.run(RootSaga);
  return store ;
};

// Store取り出し
export const Store = ConfigureStore();
