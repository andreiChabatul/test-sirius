import { lang, typeStoreApp } from '@/types/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'sonner';

const initialState: typeStoreApp = {
    modalUser: false,
    lang: 'RU'
};

export const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        openModalUser: (state) => {
            state.modalUser = true;
        },
        closeModalUser: (state) => {
            state.modalUser = false;
        },
        setLang: (state, action: PayloadAction<lang>) => {
            state.lang = action.payload;
            toast.info(`Язык изменен на ${action.payload}`);
        }
    },

})

export const { openModalUser, closeModalUser, setLang } = appReducer.actions;
export default appReducer.reducer;