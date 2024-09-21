import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { AddTodoItem, TodoItems, Footer, Header } from './components';

const App = () => {
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);

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
            <TodoItems items={items} getItems={getItems} handleMarkAsComplete={handleMarkAsComplete} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
