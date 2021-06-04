import "./ReviewCss.css";

import { Button, Grid, Paper, Typography } from "@material-ui/core";
import Carousel, { consts } from "react-elastic-carousel";
import React, { Component, useState } from "react";

import { Images } from "../assets/images";
import caroeselStyles from "./caroeselStyles";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 5 },
];
function Review(props) {
  let classes = caroeselStyles();
  let array = [
    {
      images: Images[1],
    },
    {
      images: Images[2],
    },
    {
      images: Images[3],
    },
    {
      images: Images[4],
    },
    {
      images: Images[5],
    },
    {
      images: Images[6],
    },
    {
      images: Images[7],
    },
    {
      images: Images[8],
    },
    {
      images: Images[9],
    },
    {
      images: Images[10],
    },
    {
      images: Images[11],
    },
    {
      images: Images[12],
    },
    {
      images: Images[13],
    },
    {
      images: Images[14],
    },
    {
      images: Images[15],
    },
    {
      images: Images[16],
    },
    {
      images: Images[17],
    },
    {
      images: Images[18],
    },
    {
      images: Images[19],
    },
  ];

  const [items, setItems] = useState(array);
  let type = consts.PREV;
  let myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <img src={Images.leftarrow} />
      ) : (
        <img src={Images.rightarrow} />
      );
    return (
      <div className="btnContainer">
        <button className="btnarrows" onClick={onClick} disabled={isEdge}>
          {pointer}
        </button>
      </div>
    );
  };
  return (
    <div className="center">
      <Carousel
        showArrows={false}
        renderArrow={myArrow}
        className="carousels"
        breakPoints={breakPoints}
        enableAutoPlay={true}
      >
        {items.map((item) => (
          <Paper className={classes.paper} elevation={5}>
            <img className={classes.cardimg} src={item.images} />
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}

export default Review;
