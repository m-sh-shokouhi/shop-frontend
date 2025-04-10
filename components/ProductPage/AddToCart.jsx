'use client'
import React, { useState } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// TODO: Check stock to disable or enable increase or decrease
// TODO: Check use authentication to enable or disable addtocart button
const AddToCart = ({prodcutID, stock}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) setQuantity(prev => prev + 1);
  }
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
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
        onClick={() => onAddToCart(quantity)}
        sx={{ marginLeft: 2 }}
      >
        اضافه کردن به سبد خرید
      </Button>
    </Box>
  );
};

export default AddToCart;
