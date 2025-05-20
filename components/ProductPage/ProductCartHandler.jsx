"use client";
import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "@/app/_context/CartContext";
import { useUser } from "@/app/_context/UserContext";
import { ConstructionOutlined } from "@mui/icons-material";

// TODO: Check stock to disable or enable increase or decrease
// TODO: Check use authentication to enable or disable addtocart button
const ProductCartHandler = ({ productId, stock }) => {
  const { user } = useUser();
  if (!user) {
    return <>برای خرید ابتدا ثبت نام کنید</>;
  }

  const { AddToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const onAddToCart = (produc) => {
    AddToCart(productId, quantity);
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <IconButton color="primary" onClick={handleDecrease}>
        <RemoveIcon />
      </IconButton>

      <Typography variant="h6">{quantity}</Typography>

      <IconButton color="primary" onClick={handleIncrease}>
        <AddIcon />
      </IconButton>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => onAddToCart(productId, quantity)}
        sx={{ marginLeft: 2 }}
      >
        اضافه کردن به سبد خرید
      </Button>
    </Box>
  );
};

export default ProductCartHandler;
