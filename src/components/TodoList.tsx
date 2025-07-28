import type { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";
import { List } from "@mui/material";

// Komponent som renderar hela listan med todos
interface Props {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onMoveUp: (index: number) => void;
    onMoveDown: (index: number) => void;
}

const TodoList = ({ todos, onToggle, onDelete, onMoveUp, onMoveDown }: Props) => {
    return (
        <List>
            {todos.map(( todo, index) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onMoveUp={onMoveUp}
                    onMoveDown={onMoveDown}
                />
            ))}
        </List>
    );
};

export default TodoList;