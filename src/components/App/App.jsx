import { Container, Header, SearchForm, Section, Text } from 'components';
import { getTodos } from 'components/redux/selector';
import { useSelector } from 'react-redux';
import { TodoList } from './TodoList/TodoList';

export function App() {
  const todos = useSelector(getTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ) : (
            <TodoList />
          )}
        </Container>
      </Section>
    </>
  );
}
