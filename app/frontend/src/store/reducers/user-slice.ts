import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export type IRoles = 'ADMIN' | 'MODERATOR' | 'USER' | 'VISITOR';
export type INamePermissions = 'block_user' | 'delete_user' | 'assign_roles';

export interface IUserData {
  id?: number
  email?: string
}

export interface IUserState extends IUserData {
  role: {
    name: IRoles
    permissions: {
      [key in INamePermissions]?: boolean
    }
  }
}

const initialState: IUserState = {
  email: '',
  role: {
    name: 'VISITOR',
    permissions: {}
  }
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserData: (state: IUserState, data: PayloadAction<IUserState>) => {
      return {
        ...state,
        ...data.payload
      }
    }
  },
});

export const {setUserData} = userSlice.actions;

export default userSlice.reducer;
