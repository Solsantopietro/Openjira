import { List, Paper } from "@mui/material"
import EntryCard from "./EntryCard"
import { EntryStatus } from '../../interfaces/entry';
import { FC, useContext, useMemo, DragEvent } from "react";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";
import styles from './EntryList.module.css'
interface Props {
    status: EntryStatus;
}

const EntryList: FC<Props> = ({ status }) => {
    const { entries, updateEntry } = useContext(EntriesContext)
    const { isDragging, endDragging } = useContext(UIContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    const allowDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
        const id = e.dataTransfer.getData('text')

        const entry = entries.find(e => e._id === id)!;
        entry.status = status;
        updateEntry(entry);
        endDragging();
    }


    return (
        //todo: aca haremos drop
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ''}
        >
            <Paper sx={{ height: 'calc(100vh - 250px)', backgroundColor: 'transparent', padding: '1px 10px' }}>

                {/* todo: cambiara si hago drag o no */}
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all 1s' }}>
                    {entriesByStatus.map(entry => (
                        <EntryCard key={entry._id} entry={entry} />

                    ))}
                </List>
            </Paper>
        </div>
    )
}

export default EntryList