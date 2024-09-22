import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure } from '../redux/todosSlice';
import todosService from '../services/todosService';

function* fetchTodosSaga() {
  try {
    const response = yield call(todosService.fetchTodos);
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* watchFetchTodos() {
  yield takeEvery(fetchTodosRequest.type, fetchTodosSaga);
}

export default function* rootSaga() {
  yield watchFetchTodos();
}
