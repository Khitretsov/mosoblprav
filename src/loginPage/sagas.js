import { put, takeEvery, select } from 'redux-saga/effects'

const FORMS_ROOT_TITLE = 'loginPage'

export function* fetchData(loginAndPassword) {
  console.log('loginAndPasswordloginAndPassword',loginAndPassword)
  yield put({ type: 'LOADING_USER' })
  try {
    const json = yield fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginAndPassword.payload)
    })
    .then(response => response.json(), ); 
    // console.log('fetchfetchfetchfetch', json)
    if (json.status === 'err') {
      yield put({ type: 'ERROR_MESSAGE', payload: json.message})
      const data = yield select(state => state.user.loginAndPassword);
      yield put({
        type: 'REJECT_PASSWORD', 
        payload: {
          ...data,
          password: ''
        }
      })
      yield put({
        type: '__FORMS__', 
        payload: {
          formID: FORMS_ROOT_TITLE + 2, 
          data: ''
        }
      })
      console.log('datadatadatadatadata', data)
    } else {
      yield put({
        type: 'SESSION',
        payload: json
      })
      // Сделать перевод на другую страницу
    }
    yield put({ type: 'LOADING_USER' })
  } catch (error) {
    yield put({ type: 'ERROR_MESSAGE', payload: 'Ошибка на сервере'})
    yield put({ type: 'LOADING_USER' })
  }
}

export function* loginPageWatcher() {
  yield takeEvery('LOGIN_BUTTON_CLICKED', fetchData)
}