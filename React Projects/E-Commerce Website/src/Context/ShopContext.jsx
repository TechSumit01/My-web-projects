import { createContext, useState } from "react";
import { products } from "../asset/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find((item) => item._id == product._id);
      if (isExist) {
        // if already exist , increase the quantity

        return prevItems.map((item) =>
          item._id == product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // if new add new items
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id != id));
  };

  const value = {
    products,
    currency,
    delivery_fee,
    addToCart,
    cartItems,
    removeFromCart,
  };

  return (
    <>
      <ShopContext.Provider value={value}>
        {props.children}
      </ShopContext.Provider>{" "}
    </>
  );
};

export default ShopContextProvider;
