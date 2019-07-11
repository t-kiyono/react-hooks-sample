import { call, put, take, fork } from 'redux-saga/effects';
import Actions from './actions';
import Api from '../api';

function* handleIncrementAsync() {
  while (true) {
    const action = yield take(Actions.incrementAsync.started);
    const params = action.payload;
    const { result, error } = yield call(Api.asyncIncrement, params);
    if (result && !error) {
      yield put(Actions.incrementAsync.done({ params, result }));
    } else {
      yield put(Actions.incrementAsync.failed({ params, error }));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleIncrementAsync);
}
