import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      // Check if the item already exists in the cart
      if (existingItem) {
        // If it exists, increment the quantity
        existingItem.quantity ++;
      } else {
        state.items.push({ name, image, cost, quantity: 1})
      }
    },
    removeItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (!existingItem) {
        console.warn(`Item with name ${name} does not exist in the cart.`);
        return;
      }
        // If the item exists, remove it from the cart
        state.items = state.items.filter(item => item.name !== name);

    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
        if (!existingItem) {
            console.warn(`Item with name ${name} does not exist in the cart.`);
            return;
        }
        // If the item exists, update its quantity
      existingItem.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
