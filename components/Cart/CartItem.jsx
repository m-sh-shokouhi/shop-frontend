import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { API_URL } from "@/config";
import { useCart } from "@/app/_context/CartContext";

export default function CartItem({ item }) {
  const [product, setProduct] = useState();
  const { removeFromCart, updateQuantity } = useCart();
  useEffect(() => {
    const fetchData = async (product_id) => {
      try {
        const response = await fetch(`${API_URL}/products/${product_id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const prdct = await response.json();
        setProduct(prdct);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("fetched");
      }
    };

    fetchData(item.product);
  }, []);

  // Handle quantity increase
  const handleIncrease = (item) => {
    updateQuantity(item, "inc");
  };

  // Handle quantity decrease
  const handleDecrease = (item) => {
    updateQuantity(item, "dec");
  };

  // Handle item removal
  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };
  return (
    <React.Fragment>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleRemove(item.id)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar
            alt={product && product.name}
            src={item.image}
            variant="square"
          />
        </ListItemAvatar>
        <ListItemText
          primary={product && product.name}
          secondary={`$${item.price.toFixed(2)}`}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="reduce" onClick={() => handleDecrease(item)}>
            <RemoveIcon />
          </IconButton>
          <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
          <IconButton
            aria-label="increase"
            onClick={() => handleIncrease(item)}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
}
