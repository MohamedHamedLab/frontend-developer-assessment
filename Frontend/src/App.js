import './App.css';
import { Todo } from './containers';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

export default App;
