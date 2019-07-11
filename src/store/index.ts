import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../counter/reducer';
import rootSaga from './saga';
import { AppState } from './state';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const middleWare = applyMiddleware(sagaMiddleware);
const devMiddleWare = composeWithDevTools(middleWare);

const store = createStore(
  combineReducers<AppState>({
    counter: counterReducer
  }),
  process.env.NODE_ENV === 'development' ? devMiddleWare : middleWare
);

sagaMiddleware.run(rootSaga);

export default store
