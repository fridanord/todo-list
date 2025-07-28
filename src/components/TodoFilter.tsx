import { Button, ButtonGroup, Box } from "@mui/material";

interface Props {
    current: "all" | "done" | "notdone";
    onChange: (filter: "all" | "done" | "notdone") => void;
}

const TodoFilter = ({ current, onChange }: Props) => {
    return (
        <Box mb={2} display="flex" justifyContent="center">
            <ButtonGroup>
                <Button
                    variant={current === "all" ? "contained" : "outlined"}
                    onClick={() => onChange("all")}>
                        Alla
                </Button>
                <Button
                    variant={current === "done" ? "contained" : "outlined"}
                    onClick={() => onChange("done")}
                >
                    Klara
                </Button>
                <Button
                    variant={current === "notdone" ? "contained" : "outlined"}
                    onClick={() => onChange("notdone")}
                >
                    Ej klara
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default TodoFilter;