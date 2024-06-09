import userServices from '@/services/user.services';
import { IProfile, typeStoreUser } from '@/types/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner';


const initialState: typeStoreUser = {
    isLogin: false,
    profile: {} as IProfile
};

export const fetchUser = createAsyncThunk("user", async (name: string) => {
    const response = await userServices.getInfoUser(name);
    return response;
})

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutProfile: (state) => {
            toast.info(`Выход из профиля`);
            state.isLogin = false;
            state.profile = {} as IProfile;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLogin = true;
                state.profile = action.payload;
                toast.success(`Выполнен вход ${action.payload.email}. Здрайсвуйте ${action.payload.name}`);
            })
            .addCase(fetchUser.rejected, (state) => {
                state.isLogin = false;
                toast.error(`Вход не выполнен.`);
            })
    }
})

export const { logoutProfile } = userReducer.actions;
export default userReducer.reducer;