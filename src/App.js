import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import logo from './platzi.webp';
import  React from 'react'; 

const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'hervir tomates', completed: true },
  { text: 'llorar con la llorona', completed: false },
  { text: 'asdasdasd', completed: true }
];

function App() {
  return (
    <div className="App">
      <>
        <TodoCounter completed={16} total={25} />
        <TodoSearch />

        <TodoList>
          {defaultTodos.map( todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 

            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </>
    </div>
  );
}





export default App;
