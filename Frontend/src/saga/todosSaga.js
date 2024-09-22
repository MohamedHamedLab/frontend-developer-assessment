import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
  createTodoRequest,
  createTodoSuccess,
  createTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
} from '../redux/todosSlice';
import todosService from '../services/todosService';

const errorMessages = {
  400: 'Bad Request: Please check your input.',
  404: 'Not Found: The requested resource was not found.',
  500: 'Internal Server Error: Please try again later.',
  default: 'An unexpected error occurred. Please try again.',
};

function getErrorMessage(error) {
  if (error.response) {
    return errorMessages[error.response.status] || errorMessages.default;
  }
  return error.message || errorMessages.default;
}

function* handleApiCall(apiFn, successAction, failureAction, ...params) {
  try {
    const response = yield call(apiFn, ...params);
    yield put(successAction(response.data));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    yield put(failureAction(errorMessage));
  }
}

function* fetchTodosSaga() {
  yield handleApiCall(todosService.fetchTodos, fetchTodosSuccess, fetchTodosFailure);
}

function* createTodoSaga(action) {
  yield handleApiCall(todosService.createTodo, createTodoSuccess, createTodoFailure, action.payload);
}

function* updateTodoSaga(action) {
  yield handleApiCall(
    todosService.updateTodo,
    updateTodoSuccess,
    updateTodoFailure,
    action.payload.id,
    action.payload.data
  );
}

function* deleteTodoSaga(action) {
  yield handleApiCall(todosService.deleteTodo, deleteTodoSuccess, deleteTodoFailure, action.payload);
}

function* watchFetchTodos() {
  yield takeEvery(fetchTodosRequest.type, fetchTodosSaga);
}

function* watchCreateTodo() {
  yield takeEvery(createTodoRequest.type, createTodoSaga);
}

function* watchUpdateTodo() {
  yield takeEvery(updateTodoRequest.type, updateTodoSaga);
}

function* watchDeleteTodo() {
  yield takeEvery(deleteTodoRequest.type, deleteTodoSaga);
}

export default function* rootSaga() {
  yield all([watchFetchTodos(), watchCreateTodo(), watchUpdateTodo(), watchDeleteTodo()]);
}
