"use client";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Paper,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  button: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "white",
    color: "#1976d2",
    textTransform: "capitalize",
    fontWeight: "bold",
    borderRadius: 5,
    padding: "4px 8px"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: 1
  },
  cardAction: {
    display: "flex",
    justifyContent: "space-between",
    p: 2
  }
}));

const PropertyCard = (props: any) => {
  const { property } = props;
  const classes = useStyles();
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `$${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `$${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `$${rates.nightly.toLocaleString()}/night`;
    }
  };
  return (
    <Paper sx={{ maxWidth: 420 }} elevation={2}>
      <CardActionArea>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="140"
            image="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
            alt="green iguana"
            loading="lazy"
          />
          <Box className={classes.button}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {getRateDisplay()}
            </Typography>
          </Box>
        </Box>
        <CardContent sx={{ p: 2 }}>
          <Typography gutterBottom component="div">
            {property?.type}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {property?.name}
          </Typography>
          <Box className={classes.content} gap={2}>
            <Typography variant="body2" color="text.secondary">
              {property?.beds} beds
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {property?.baths} baths
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {property?.square_feet} sqft
            </Typography>
          </Box>
          <Box className={classes.content} gap={2}>
            <Typography variant="body2" color="text.secondary">
              weekly
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monthly
            </Typography>
          </Box>
        </CardContent>
        <Divider />
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button
          size="small"
          sx={{ color: "#c1121f", textTransform: "capitalize" }}
        >
          {property.location.city} {property.location.state}
        </Button>
        <Link href={`/properties/${property._id}`} underline="none">
          <Button
            size="small"
            color="primary"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Details
          </Button>
        </Link>
      </CardActions>
    </Paper>
  );
};

export default PropertyCard;
