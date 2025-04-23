'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  IconButton,
  Button,
  Grid,
  Badge,
  Container,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CART from '@/data/cart';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const [cart, setCartItems] = useState(CART);
  const router = useRouter();
  // Handle quantity increase
  const handleIncrease = (id) => {
    console.log('Check backend for increase');
  };

  // Handle quantity decrease
  const handleDecrease = (id) => {
    console.log('Check backend for decrease');
  };

  // Handle item removal
  const handleRemove = (id) => {
    console.log('send request to backend for remove');
  };

  return (
    <Grid container direction='column' sx={{ marginTop: '15px' }}>
      <Grid>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Badge badgeContent={cart.items.length} color='primary'>
            <ShoppingCartIcon color='action' sx={{ fontSize: 30 }} />
          </Badge>
          <Typography variant='h5' component='h1' sx={{ ml: 2 }}>
            محتوای سبد خرید
          </Typography>
        </Box>
      </Grid>
      <Grid>
        {cart.items.length === 0 ? (
          <Typography variant='body1'>سبد خرید خالی است</Typography>
        ) : (
          <List>
            {cart.items.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={() => handleRemove(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar alt={item.name} src={item.image} variant='square' />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={`$${item.price.toFixed(2)}`}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      aria-label='reduce'
                      onClick={() => handleDecrease(item.id)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                    <IconButton
                      aria-label='increase'
                      onClick={() => handleIncrease(item.id)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider variant='inset' component='li' />
              </React.Fragment>
            ))}
          </List>
        )}
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6'>: ${cart.total_price.toFixed(2)}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            sx={{ mr: 2 }}
            onClick={() => router.push('/')}
          >
            ادامه خرید
          </Button>
          <Button 
            variant='contained' color='success' size='large'>
            انتخاب آدرس
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;
