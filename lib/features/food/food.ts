import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Food {
  id: number;
  name: string;
  quantity: number;
}

interface FoodState extends Array<Food> {}

const initialState: FoodState = [];

export const foodSlice = createSlice({
  name: "foodSlice",
  initialState,
  reducers: {
    addToMenu: (state, action: PayloadAction<Food>) => {
      const findItem = state.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.quantity += 1;
      } else {
        const itemClone = { ...action.payload, quantity: 1 };
        state.push(itemClone);
      }
    },
    deleteFromDishes: (state, action: PayloadAction<Food>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearDishes: () => {
      return [];
    },
  },
});

export const { addToMenu, deleteFromDishes, clearDishes } = foodSlice.actions;

export default foodSlice.reducer;