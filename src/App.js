import { Provider } from 'react-redux';
import store from './store/store';
import Todo from './Todo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
