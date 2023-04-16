import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ISuccesUserCreation } from '../../utils/fetch/checkStatus'
import { ISuccessLogin } from '../../utils/fetch/signIn'

// Define a type for the slice state
interface UserState {
  isAuthorized: boolean
  firstName: string
  lastName: string
  email: string
}

// Define the initial state using that type
const initialState: UserState = {
  isAuthorized: false,
  firstName: '',
  lastName: '',
  email: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorize: (state, action: PayloadAction<ISuccesUserCreation>) => {
      state.isAuthorized = true
      state.firstName = action.payload.first_name
      state.lastName = action.payload.last_name
      state.email = action.payload.email
    },
    login: (state, action: PayloadAction<ISuccessLogin>) => {
      state.isAuthorized = true
      state.firstName = action.payload.first_name??"testname"
      state.lastName = action.payload.last_name??"testsurname"
      state.email = action.payload.email
    },
    logout: (state) => {
      state.isAuthorized = false
      state.firstName = ''
      state.lastName = ''
      state.email = ''
    },
  },
})

export const { authorize, login, logout } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
