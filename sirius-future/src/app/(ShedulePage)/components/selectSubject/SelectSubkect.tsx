import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectSubject() {
    return (
        <FormControl >
            <InputLabel sx={{
                fontSize: '10px',
                height: 35,
                color: '#79747F'
            }}
                id="select-label">Выбрать предмет</InputLabel>
            <Select sx={{
                width: 250,
                height: 35,
                top: 4
            }}
                labelId="select-label"
                label="Выбрать предмет"
            >
                <MenuItem>Предмет 1</MenuItem>
                <MenuItem >Предмет 2</MenuItem>
                <MenuItem>Предмет 3</MenuItem>
            </Select>
        </FormControl>)

}