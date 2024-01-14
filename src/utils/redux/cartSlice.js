import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    try{
      const serializedCart = localStorage.getItem('cart');
      const parsedCart = serializedCart ? JSON.parse(serializedCart) : null;
      return parsedCart && Array.isArray(parsedCart.cartItems) ? parsedCart : { cartItems: [] };
    }
    catch (error){
      console.error('Error loading cart from local storage:', error);
      return { cartItems: [] };
    }
};
  
const saveCartToLocalStorage = (cart) => {
    try {
      const serializedCart = JSON.stringify(cart);
      localStorage.setItem('cart', serializedCart);
    } catch (error) {
      console.error('Error saving cart to local storage:', error);
    }
};

const cartSlice=createSlice({
    name:'cart',
    initialState:
        loadCartFromLocalStorage(),
    reducers:{
        addItem:(state,action)=>{
            // state.cartItems.push(action.payload)
            // saveCartToLocalStorage(state);
          const newItem = action.payload;
          const existingItem = state.cartItems.find(item => item.pid === newItem.pid);
          if (existingItem){
            existingItem.length += 1;
          }else{
            state.cartItems.push({ ...newItem, length: 1 });
          }
          saveCartToLocalStorage(state);
        },
        removeItem: (state, action) => {
            const { pid } = action.payload;
            state.cartItems = state.cartItems.filter(item => item.pid !== pid);
            saveCartToLocalStorage(state);
        },
        clearCart:(state)=>{
            state.cartItems.pop()
            saveCartToLocalStorage(state);
        },
        increaseItem: (state, action) => {
            const { pid } = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.pid === pid);
      
            if (existingItemIndex !== -1) {
              const existingItem = state.cartItems[existingItemIndex];
              const updatedLength = (existingItem.length ?? 0) + 1;
      
              if (updatedLength >= 1) {
                existingItem.length = updatedLength;
              } else {
                state.cartItems.splice(existingItemIndex, 1);
              }
      
              saveCartToLocalStorage(state);
            }
        },
        decreaseItem:(state,action)=>{
            const { pid } = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.pid === pid);
      
            if (existingItemIndex !== -1) {
              const existingItem = state.cartItems[existingItemIndex];
              const updatedLength = (existingItem.length ?? 0) - 1;
      
              if (updatedLength >= 1) {
                existingItem.length = updatedLength;
              } else {
                state.cartItems.splice(existingItemIndex, 1);
              }
      
              saveCartToLocalStorage(state);
            }
        }
    }
})

export const {addItem,removeItem,clearCart, increaseItem, decreaseItem}=cartSlice.actions
export default cartSlice.reducer