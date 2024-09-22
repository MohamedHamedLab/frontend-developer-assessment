import api from './api';

const fetchTodos = () => {
  return api.get('/todos');
};

const createTodo = (todoData) => {
  return api.post('/todos', todoData);
};

const updateTodo = (todoId, updatedData) => {
  return api.put(`/todos/${todoId}`, updatedData);
};

const deleteTodo = (todoId) => {
  return api.delete(`/todos/${todoId}`);
};

const todosService = {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default todosService;
