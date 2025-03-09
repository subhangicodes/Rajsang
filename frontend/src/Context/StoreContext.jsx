import { createContext, useState } from "react"
import { food_list } from "../assets/assets"
export const StoreContext=createContext({})

const StoreContextProvider =(props)=>{
    const [cartItems,setCartItem]=useState({})

    const addToCart =(itemId)=>{
      if(!cartItems[itemId]){
        setCartItem((prev)=>({...prev,[itemId]:1}))        // if user add the item first time or product id is not available
      }
      else{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))      // if item is added so it increase the item 
      }
    }

    const removeFromCart =(itemId)=>{
      setCartItem((prev)=> {
        if(prev[itemId] === 1){
          const newCart ={...prev};
          delete newCart[itemId];
          return newCart
        }
        return {...prev,[itemId]:prev[itemId] - 1};
      }
       
                                          //({...prev,[itemId]:prev[itemId]-1}))      // it decrease the item by 1
    )}

   const getTotalCartAmount = ()=>{
      let totalAmount =0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo =food_list.find((product)=>product._id ===item);
          totalAmount +=itemInfo.price* cartItems[item];
        }
       }
       return totalAmount;
   }


    const contextValue={
      food_list,
      cartItems,
      setCartItem,
      addToCart,
      removeFromCart,
      getTotalCartAmount

    }
    return(
        <StoreContext.Provider value={contextValue}>
       
        {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;