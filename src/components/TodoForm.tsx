import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

// Props för komponenten - tar emot en funktion som lägger till en todo
interface Props {
    onAddTodo: (text: string) => void;
}

const TodoForm = ({ onAddTodo }: Props) => {
    //State som lagrar det aktuella värdet i inputfältet
    const [input, setInput] = useState(''); 
    //Hanterar formulärets submit-event
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Förhindrar sidladdning vid submit
        if (input.trim()) {
            onAddTodo(input); // Anropar funktionen från props med input som argument
            setInput(''); // Tömmer inputfältet
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} mb={2} display="flex" gap={1}>
            <TextField
                label="Ny Todo"
                variant="outlined"
                fullWidth
                value={input}
                onChange={(e) => setInput(e.target.value)} // Uppdaterar input när användaren skriver
            />
            <Button type="submit" variant="contained" color="success">
                <AddIcon />
            </Button>
        </Box>
    );
};

export default TodoForm;