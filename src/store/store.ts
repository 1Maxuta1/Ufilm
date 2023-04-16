import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'
import userSlice from './slices/userSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// ...


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedUserReducer = persistReducer(persistConfig, userSlice)

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  devTools: !import.meta.env.PROD,

  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({}).concat([apiSlice.middleware]).concat(thunk)
})

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch