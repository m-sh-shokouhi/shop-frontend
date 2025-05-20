"use client";
// context/CartContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { API_URL } from "@/config";
import { Co2Sharp } from "@mui/icons-material";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const { user, token } = useUser();
  // Load cart from backend  on initial render
  useEffect(() => {
    if (token) {
      fetchCart();
    }
  }, [token]);

  const fetchCart = async () => {
    try {
      const resp = await fetch(`${API_URL}/carts/latest/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      const data = await resp.json();
      setCart(data);
    } catch (err) {
      log(err);
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      const resp = await fetch(`${API_URL}/cart-items/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ product: productId, cart: cart.id, quantity }),
      });
      const data = await resp.json();
      if (resp.ok) {
        fetchCart();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      const resp = await fetch(`${API_URL}/cart-items/${cartItemId}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });
      if (resp.ok) {
        fetchCart();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
