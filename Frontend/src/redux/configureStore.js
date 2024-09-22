import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todosReducer from '../redux/todosSlice';
import rootSaga from '../saga/todosSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
