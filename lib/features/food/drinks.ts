import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Drink {
  id: number;
  name: string;
  quantity: number;
}

interface DrinkState extends Array<Drink> {}

const initialState: DrinkState = [];

export const drinkSlice = createSlice({
  name: "drinkSlice",
  initialState,
  reducers: {
    addToDrinks: (state, action: PayloadAction<Drink>) => {
      const findItem = state.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.quantity += 1;
      } else {
        const itemClone = { ...action.payload, quantity: 1 };
        state.push(itemClone);
      }
    },
    deleteFromDrinks: (state, action: PayloadAction<Drink>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearDrinks: () => {
      return [];
    },
  },
});

export const { addToDrinks, deleteFromDrinks, clearDrinks } = drinkSlice.actions;

export default drinkSlice.reducer;