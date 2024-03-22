import { configureStore } from '@reduxjs/toolkit'
import foodSlice  from './features/food/food'
import  drinkSlice from './features/food/drinks'

export const store = configureStore({
  reducer: {
    food: foodSlice,
    drink: drinkSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch