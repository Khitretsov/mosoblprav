import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()
// Приложение не работает, если в браузере нет расширения redux-devtools
const isDevtoolsAvalible = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default function configureStore() {

  const store = createStore(
    connectRouter(history)(rootReducer),
    rootReducer,
    compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)), isDevtoolsAvalible)
  )
  
  sagaMiddleware.run(rootSaga)

  return store
}