import sheduleServices from '@/services/shedule.services';
import { typeStoreShedule } from '@/types/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner';

const initialState: typeStoreShedule = {
    data: [],
    loading: true
};

export const fetchShedule = createAsyncThunk("shedule", async () => {
    const response = await sheduleServices.getallShedule();
    return response;
})

export const sheduleReducer = createSlice({
    name: 'shedule',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchShedule.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                toast.success(`Ваше расписание загружено.`);
            })
            .addCase(fetchShedule.rejected, (state) => {
                state.loading = false;
                toast.error(`Ошибка при загрузке расписания.`);
            })
    }
})

export default sheduleReducer.reducer;