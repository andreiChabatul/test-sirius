import { configureStore } from '@reduxjs/toolkit';
import sheduleReducer from './reducers/shedule.reducer';
import userReducer from './reducers/user.reducer';
import appReducer from './reducers/app.reducer';

export const makeStore = () => {
  return configureStore({
    reducer: {
      shedule: sheduleReducer,
      user: userReducer,
      app: appReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
