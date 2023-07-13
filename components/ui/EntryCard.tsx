import { UIContext } from "@/context/ui";
import { Entry } from "@/interfaces"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { FC, DragEvent, useContext } from "react";


interface Props {
    entry: Entry;
}



const EntryCard: FC<Props> = ({ entry }) => {

const { startDragging, endDragging } = useContext(UIContext)

    const onDragStart = (e: DragEvent) => {
        e.dataTransfer.setData('text', entry._id)
        startDragging()
        // todo: modificar el estado, para indicar que estoy haciendo drag
    }

    const onDragEnd = (e: DragEvent) => {
        endDragging()
        // todo: fin del drag
    }

    return (
        <Card sx={{ marginBottom: 1 }}
            //eventos de drag
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}>
                    <Typography variant='body2'>hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default EntryCard