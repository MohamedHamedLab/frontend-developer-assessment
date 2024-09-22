import { Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { AddTodoItem, TodoItems, Footer, Header } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosRequest } from '../redux/todosSlice';

const Todo = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.todos);
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleDescriptionChange = (event) => {
    // todo
  };

  async function getItems() {
    try {
      alert('todo');
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAdd() {
    try {
      alert('todo');
    } catch (error) {
      console.error(error);
    }
  }

  function handleClear() {
    setDescription('');
  }

  async function handleMarkAsComplete(item) {
    try {
      alert('todo');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <Header />
      <Container>
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
            <TodoItems items={list} getItems={getItems} handleMarkAsComplete={handleMarkAsComplete} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Todo;
