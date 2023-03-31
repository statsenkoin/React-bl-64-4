import { getTodos } from 'components/redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, GridItem, Todo } from 'components';
import { deleteTodo } from 'components/redux/todoSlice';

export const TodoList = () => {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };
  return (
    <Grid>
      {todos.length > 0 &&
        todos.map(({ id, text }, index) => (
          <GridItem key={id}>
            <Todo
              id={id}
              text={text}
              counter={index + 1}
              onClick={() => handleDeleteTodo(id)}
            />
          </GridItem>
        ))}
    </Grid>
  );
};
