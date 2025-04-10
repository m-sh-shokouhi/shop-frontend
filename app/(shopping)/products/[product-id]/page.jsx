'use client'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@/components/Link/Link'

import { AddToCart, ProductImageCarousel } from '@/components' 
const product = {
  id: 1,
  price: 250000,
  stock: 5,
  images: ["https://placehold.co/400x300?text=Image+1&font=roboto","https://placehold.co/400x300?text=Image+2&font=roboto","https://placehold.co/400x300?text=Image+3&font=roboto"],
  category: "کتاب",
  title: "عبای زنانه طرح عربی",
  description : 'این لباس زیبا با پارچهی ابریشم نرم و لطیف دوخته شده و طرح گلهای ظریف روی آن، جلوهی خاصی به آن بخشیده است. یقهی هفت و آستینهای کوتاه، این لباس را برای مهمانیهای شبانه یا مجالس شیک ایدئال کرده است. تنگی مناسب در کمر و گشادی پایین دامن، ترکیبی جذاب و زنانه ایجاد میکند که هر بینندهای را مجذوب خود خواهد کرد.'
}

export default function ProductPage() {
  return (
    <>
      <Grid container>
        <Breadcrumbs aria-label="breadcrumb">
            <Link 
              href="/"s
            >
                خانه
            </Link>
            <Typography
              underline="hover"
              color="text.primary"
              aria-current="page"
            >
              {product.title}
            </Typography>
          </Breadcrumbs>
      </Grid>
      <Grid container spacing={5} direction="row-reverse" sx={{marginTop:"15px"}}>
          <Grid size={{xs: 12, md:6}}>
          <ProductImageCarousel images={product.images}/>
          </Grid>
          <Grid size={{xs: 12, md:6}}>
            <Grid container direction='column'>
              <Grid>
                <Typography variant='h3' sx={{marginBottom:"15px"}}>{product.title}</Typography>
              </Grid>
              <Grid>
                <Typography variant='body1'>
                  {product.description}
                </Typography>
              </Grid>
              <Grid sx={{marginTop:"15px"}}>
                <AddToCart productId={product.id} stock={product.stock} />
              </Grid>
          </Grid>
          </Grid>
      </Grid>
    </>
  )
}
