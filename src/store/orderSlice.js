import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  orderType: null,
  category: "sandwich",
  menu: null,
  bread: null,
  cheese: null,
  vegetables: [],
  sauce: [],
  side: null,
  drink: null,
  cart: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },

    nextStep: (state) => {
      state.step += 1;
    },

    prevStep: (state) => {
      state.step -= 1;
    },

    resetTopping: (state) => {
      state.bread = null;
      state.cheese = null;
      state.vegetables = [];
      state.sauce = [];
    },

    setMenu: (state, action) => {
      state.menu = action.payload;
    },

    setOrderType: (state, action) => {
      state.orderType = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setBread: (state, action) => {
      state.bread = action.payload;
    },

    setCheese: (state, action) => {
      state.cheese = action.payload;
    },

    toggleVegetable: (state, action) => {
      const index = state.vegetables.indexOf(action.payload);

      if (index > -1) {
        state.vegetables.splice(index, 1);
      } else {
        state.vegetables.push(action.payload);
      }
    },

    toggleSauce: (state, action) => {
      const index = state.sauce.indexOf(action.payload);

      if (index > -1) {
        state.sauce.splice(index, 1);
      } else {
        state.sauce.push(action.payload);
      }
    },

    setSide: (state, action) => {
      state.side = action.payload;
    },

    setDrink: (state, action) => {
      state.drink = action.payload;
    },

    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const {
  setStep,
  nextStep,
  prevStep,
  resetTopping,
  setOrderType,
  setCategory,
  setMenu,
  setBread,
  setCheese,
  toggleVegetable,
  toggleSauce,
  setSide,
  setDrink,
  addCart,
} = orderSlice.actions;

export default orderSlice.reducer;
