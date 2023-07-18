import { Entry } from '@/interfaces';
import { FC, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Esta es una descripcion cualquiera, porque no tengo la extension de Lorem.',
            status: 'pending',
            createdAt: Date.now(),

        },
        {
            _id: uuidv4(),
            description: 'En proceso: Esta es una descripcion cualquiera, porque no tengo la extension de Lorem.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000000,

        },
        {
            _id: uuidv4(),
            description: 'Finalizada: Esta es una descripcion cualquiera, porque no tengo la extension de Lorem.',
            status: 'finished',
            createdAt: Date.now() - 1000000,

        }
    ],
}

interface Props {
    children?: JSX.Element | JSX.Element[];

}


export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: 'Entry Add-Entry', payload: newEntry })
    }

    const updateEntry = (entry: Entry) => {
        dispatch({ type: 'Entry Update-Entry', payload: entry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>)
};