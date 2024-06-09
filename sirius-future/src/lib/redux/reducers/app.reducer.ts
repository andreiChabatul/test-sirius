import {typeStoreApp } from '@/types/store';
import { createSlice } from '@reduxjs/toolkit'

const initialState: typeStoreApp = {
    modalUser: false
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
        }
    },

})

export const { openModalUser, closeModalUser } = appReducer.actions;
export default appReducer.reducer;