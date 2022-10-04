import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks'; 
import TodoItem from '../TodoItem/TodoItem';
import { todoListSelector, filterSelector } from '../../store/selectors';
import { getTodos } from '../../store/thunks'; 
import { filterTodoList } from '../../utils/todoFilter';
import styles from './TodoList.module.css'

const TodoList:React.FC = () => {
  const filter = useAppSelector(filterSelector);
  const todos = useAppSelector(todoListSelector);
  const filteredTodo = filterTodoList(filter, todos);
  const dispatch =useAppDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // useEffect(() => {
  //   filterTodoList(filter, todos)
  // },[])

  return (
    <> 
    {(!filteredTodo.length || !todos.length) ? <p className={styles.todoListNotice}>Список задач пуст!</p> : (
          <ul className={styles.todoList}>
          {filteredTodo.map((todo) => (
          <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          date={todo.date}
          isCompleted={todo.isCompleted}
          isFavourite={todo.isFavourite}
          />
          ))}
        </ul>
    )}
    </>
  );
};

export default TodoList;
