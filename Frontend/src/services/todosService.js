import api from './api';

const fetchTodos = () => {
  return api.get('/todoItems');
};

const createTodo = (todoData) => {
  return api.post('/todoItems', todoData);
};

const updateTodo = (todoId, updatedData) => {
  return api.put(`/todoItems/${todoId}`, updatedData);
};

const deleteTodo = (todoId) => {
  return api.delete(`/todoItems/${todoId}`);
};

const todosService = {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default todosService;
