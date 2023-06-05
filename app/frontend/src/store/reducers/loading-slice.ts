import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface ILoadingState {
  loadingUser: boolean;
}

export interface ILoadingPayload {
  key: 'loadingUser';
  value: boolean;
}

const initialState: ILoadingState = {
  loadingUser: true,
}

export const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    setLoadingData: (state: ILoadingState, {payload}: PayloadAction<ILoadingPayload>) => {
      return {
        ...state,
        [payload.key]: payload.value,
      }
    }
  },
});

export const {setLoadingData} = loadingSlice.actions;

export default loadingSlice.reducer;
