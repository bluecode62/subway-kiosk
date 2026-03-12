import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  menu: null,
  bread: null,
  cheese: null,
  vegetables: [],
  sauce: [],
  side: null,
  drink: null,
  cart: []
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    
    setStep: (state, action) => {
      state.step = action.payload;
    },

    setMenu: (state, action) => {
      state.menu = action.payload;
    },

    setBread: (state, action) => {
      state.bread = action.payload;
    },

    setCheese: (state, action) => {
      state.cheese = action.payload;
    },

    addVegetable: (state, action) => {
      state.vegetables.push(action.payload);
    },

    setSauce: (state, action) => {
      state.sauce = action.payload;
    },

    setSide: (state, action) => {
      state.side = action.payload;
    },

    setDrink: (state, action) => {
      state.drink = action.payload;
    },

    addCart: (state, action) => {
      state.cart.push(action.payload);
    }

  }
});

export const {
  setStep,
  setMenu,
  setBread,
  setCheese,
  addVegetable,
  setSauce,
  setSide,
  setDrink,
  addCart
} = orderSlice.actions;

export default orderSlice.reducer;