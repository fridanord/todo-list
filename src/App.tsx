import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import type { Todo } from './models/Todo';
import './index.css';

//Huvudkomponent som hanterar hela appens logik och state.
function App() {
  //useState hook, som lagrar vår lista av todo-objekt.
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Gå ut med hunden", done: false },
    { id: 2, text: "Söka fler LIA-platser", done: false },
    { id: 3, text: "Laga middag", done: true }
  ]);

  // useState som lagrar vilket filter som är aktivt (all / done / notdone)
  
  const [filter, setFilter] = useState<"all" | "done" | "notdone">("all");

  //Filtrerar todos utifrån valt filter
  const filteredTodos = todos.filter(todo => {
    if (filter === "done") return todo.done; 
    if (filter === "notdone") return !todo.done;
    return true; // Visa alla om filtret är "all"
  });

  // Lägger till en ny todo med ett unikt id baserat på timestamp
  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, done: false };
    setTodos(prev => [newTodo, ...prev]);
  };

  // Växlar mellan att markera en todo som klar/inte klar
  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Tar bort en todo, filterar bort den vi valt genom rätt id.
  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // Flyttar upp en todo i listan (byter plats med den ovanför) 
  const moveUp = (index: number) => {
    if (index === 0) return;
    const newTodos = [...todos];
    [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
    setTodos(newTodos);// Uppdaterar vårat state
  };

  // Flyttar ned en todo i listan (byter plats med den under)
  const moveDown = (index: number) => {
    if (index === todos.length - 1) return;
    const newTodos = [...todos];
    [newTodos[index + 1], newTodos[index]] = [newTodos[index], newTodos[index + 1]];
    setTodos(newTodos);
  };

  // JSX - strukturen för appen.
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={4} className="todo-list">
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Caveat, cursive' }}>
          Att göra-lista
        </Typography>
        <TodoForm onAddTodo={addTodo} />
        <TodoFilter current={filter} onChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onMoveUp={moveUp}
          onMoveDown={moveDown}
        />
      </Box>
    </Container>
  );
}

export default App;