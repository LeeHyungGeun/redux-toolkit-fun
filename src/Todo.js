import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/todoReducer';
const Todo = () => {
  const [todo, setTodo] = useState('');
  const todoItems = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {
        todoItems.map((todoItem) => {
          return (
            todoItem
          );
        })
      }
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => {
        dispatch(actions.add(todo));
        setTodo('');
      }}>
        My button
      </button>
    </div>
  )  
};

export default Todo;