
'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
export default function ProductImageCarousel({images}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0px",

    };
  return (
    <Box width="100%" maxWidth={500} mx="auto">
      <Slider {...settings}>
        {images.map((img,i) => <div key={i}><img src={img} /></div>)}
      </Slider>
    </Box>

  );
}