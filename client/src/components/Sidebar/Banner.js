import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Icon } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  image: {
    // backgroundImage: "url(/bg-img.png)",
    background:
      "linear-gradient(rgba(68, 132, 255, 0.8), rgba(121,176,253, 0.9)), url(/bg-img.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title: {
    color: "white",
    margin: "0 20%",
  },
  bubbleIcon: {
    width: "auto",
    height: "auto",
    marginBottom: "10%",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      alignItems="center"
      xs={12}
      sm={4}
      md={5}
      className={classes.image}
    >
      <Grid container direction="column" alignItems="center">
        <Icon component="div" className={classes.bubbleIcon}>
          <img alt="bubble-icon" src="./bubble.svg" />
        </Icon>
        <Typography align="center" variant="h6" className={classes.title}>
          Converse with anyone <br /> with any language
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Banner;
