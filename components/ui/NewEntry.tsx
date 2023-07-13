import { Box, Button, TextField } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveAltOutlined'
import { AddCircleOutlineOutlined } from "@mui/icons-material"
import { ChangeEvent, useContext, useState } from "react"
import { UIContext } from "@/context/ui"
import { EntriesContext } from "@/context/entries"

export const NewEntry = () => {
    // const [isAdding, setIsAddingEntry] = useState(false);
    const { addNewEntry } = useContext(EntriesContext)
    const { isAddingEntry, setIsAddingEntry} = useContext(UIContext)

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false)
    
    const onTextFieldChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onSave = () => {
        if(inputValue.length === 0) return;
        addNewEntry(inputValue)
        setIsAddingEntry(false)
        setTouched(false)
        setInputValue('')
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 1 }}>

            {isAddingEntry ?
                <>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder='Nueva entrada'
                        autoFocus
                        multiline
                        label='Nueva entrada'
                        helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                        error={inputValue.length <= 0 && touched}
                        value={inputValue}
                        onChange={onTextFieldChanged}
                        onBlur={() => setTouched(true)}
                    />
                    <Box display='flex' justifyContent='space-between' mb={2}>
                        <Button
                            variant='text'
                            // color='error'
                            onClick={() => { setIsAddingEntry(false)}}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant='outlined'
                            color='secondary'
                            endIcon={<SaveOutlinedIcon />}
                            onClick={onSave}
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
                :
                <Button
                    startIcon={<AddCircleOutlineOutlined />}
                    fullWidth
                    variant='outlined'
                    onClick={() => setIsAddingEntry(true)}
                >
                    Agregar tarea
                </Button>
            }

        </Box>
    )
}
