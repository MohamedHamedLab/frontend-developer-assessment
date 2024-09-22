import { Container, Row, Col, Alert } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { AddTodoItem, TodoItems, Footer, Header } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosRequest, createTodoRequest, updateTodoRequest, deleteTodoRequest } from '../redux/todosSlice';
const Todo = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.todos);
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAdd = () => {
    dispatch(createTodoRequest({ description }));
    setDescription('');
  };

  const handleClear = () => {
    setDescription('');
  };

  const handleMarkAsComplete = (item) => {
    dispatch(updateTodoRequest({ id: item.id, data: { ...item, completed: true } }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodoRequest(id));
  };

  return (
    <div className="App">
      <Header />
      <Container>
        {loading && <div>Loading...</div>}
        {error && <Alert variant="danger">{error}</Alert>}
        {!loading && !error && (
          <>
            <Row>
              <Col>
                <AddTodoItem
                  description={description}
                  handleDescriptionChange={handleDescriptionChange}
                  handleAdd={handleAdd}
                  handleClear={handleClear}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <TodoItems items={list} handleMarkAsComplete={handleMarkAsComplete} handleDelete={handleDelete} />
              </Col>
            </Row>
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Todo;
