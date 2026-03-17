import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  orderType: null,
  category: "sandwich",
  menu: null,
  size: null,
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

    resetSandwich: (state) => {
      state.size = null;
      state.bread = null;
      state.cheese = null;
      state.vegetables = [];
      state.sauce = [];
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

    setSize: (state, action) => {
      state.size = action.payload;
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
      const item = action.payload;
      const exists = state.vegetables.find((v) => v.id === item.id);

      if (exists) {
        state.vegetables = state.vegetables.filter((v) => v.id !== item.id);
      } else {
        state.vegetables.push(item);
      }
    },

    toggleSauce: (state, action) => {
      const item = action.payload;
      const exists = state.sauce.find((v) => v.id === item.id);
      if (exists) {
        state.sauce = state.sauce.filter((v) => v.id !== item.id);
      } else {
        state.sauce.push(item);
      }
    },

    saveSandwich: (state) => {
      if (!state.bread || !state.cheese || !state.menu) return;

      const newSandwich = {
        id: state.menu?.id,
        name: state.menu?.name,
        image: state.menu?.image,
        price: state.menu?.price,
        bread: state.bread,
        cheese: state.cheese,
        vegetables: [...state.vegetables],
        sauce: [...state.sauce],
        quantity: 1,
      };

      const existingItem = state.cart.find(
        (item) => item.id === newSandwich.id
      );

      if(existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push(newSandwich);
      }

      state.size = null;
      state.bread = null;
      state.cheese = null;
      state.vegetables = [];
      state.sauce = [];
    },

    saveMenuItem: (state, action) => {
      const menu = action.payload;
      if (!menu) return;

      const newItem = {
        id: menu.id + '-' + state.category,
        name: menu.name,
        image: menu.image,
        price: menu.price || 0,
        quantity: 1,
      };

      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if(existingItem){
        existingItem.quantity += 1;
      } else {
        state.cart.push(newItem);
      }
    },

    increaseQuantity: (state, action) => {
      const index = action.payload;
      if (state.cart[index]) state.cart[index].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const index = action.payload;
      if (state.cart[index] && state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
      } else if (state.cart[index]) {
        state.cart.splice(index, 1);
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
  resetSandwich,
  resetTopping,
  setOrderType,
  setCategory,
  setMenu,
  setSize,
  setBread,
  setCheese,
  toggleVegetable,
  toggleSauce,
  saveSandwich,
  saveMenuItem,
  increaseQuantity,
  decreaseQuantity,
  setSide,
  setDrink,
  addCart,
} = orderSlice.actions;

export default orderSlice.reducer;
