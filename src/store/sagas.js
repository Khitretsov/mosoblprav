import { all } from 'redux-saga/effects'
import { loginPageWatcher } from '../loginPage/sagas';

export default function* rootSaga() {
  yield all([
    loginPageWatcher()
  ])
}