"use client";
import React, { useState } from "react";
import { Box, Typography, List, Button, Grid, Badge } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItem from "@/components/Cart/CartItem";
import { redirect, useRouter } from "next/navigation";
import { useCart } from "../_context/CartContext";
import { useUser } from "../_context/UserContext";

const Cart = () => {
  const { token } = useUser();
  // if (!token) {
  //   redirect("/");
  // }
  const { cart } = useCart();
  const router = useRouter();

  return (
    <Grid container direction="column" sx={{ marginTop: "15px" }}>
      <Grid>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Badge
            badgeContent={cart.items ? cart.items.length : 0}
            color="primary"
          >
            <ShoppingCartIcon color="action" sx={{ fontSize: 30 }} />
          </Badge>
          <Typography variant="h5" component="h1" sx={{ ml: 2 }}>
            محتوای سبد خرید
          </Typography>
        </Box>
      </Grid>
      <Grid>
        {cart.items && cart.items.length === 0 ? (
          <Typography variant="body1">سبد خرید خالی است</Typography>
        ) : (
          <List>
            {cart.items
              ? cart.items.map((item) => <CartItem key={item.id} item={item} />)
              : null}
          </List>
        )}
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">
            : ${cart.items ? cart.total_price : 0}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mr: 2 }}
            onClick={() => router.push("/")}
          >
            ادامه خرید
          </Button>
          <Button variant="contained" color="success" size="large">
            انتخاب آدرس
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;
