"use client";
import {
  Box,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LocalHotelRoundedIcon from "@mui/icons-material/LocalHotelRounded";
import BathtubRoundedIcon from "@mui/icons-material/BathtubRounded";
import SquareFootRoundedIcon from "@mui/icons-material/SquareFootRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  location: {
    marginBottom: 24,
    color: "#c05621",
    display: "flex",
    alignItems: "center"
  },
  container: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bolder"
  }
}));

const PropertyDetails = ({ property }) => {
  const classes = useStyles();
  return (
    <>
      <Paper sx={{ p: 1 }} elevation={2}>
        <CardContent>
          <Box>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              {property.type}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bolder", mb: 1 }}>
              {property.name}
            </Typography>
            <Typography
              variant="body1"
              className={classes.location}
              sx={{ gap: 1 }}
            >
              <LocationOnIcon />
              {property.location.street}, {property.location.city}{" "}
              {property.location.state}
            </Typography>
          </Box>
          <Box sx={{ bgcolor: "#000000", p: 1, margin: "24px 0" }}>
            <Typography sx={{ color: "white" }} variant="h6">
              Rates & Options
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"space-around"}>
            <Typography
              variant="h6"
              className={classes.container}
              color="text.secondary"
            >
              Nightly
              <CloseRoundedIcon sx={{ color: "#c53030", fontSize: "2rem" }} />
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bolder" }}
              color="text.secondary"
            >
              Weekly
              <span style={{ color: "blue", fontWeight: "bolder" }}>
                {property.rates.weekly ? (
                  ` $${property.rates.weekly.toLocaleString("en-IN")}`
                ) : (
                  <CloseRoundedIcon sx={{ color: "#c53030" }} />
                )}
              </span>
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bolder" }}
              color="text.secondary"
            >
              Monthly
              <span style={{ color: "blue", fontWeight: "bolder" }}>
                {property.rates.monthly ? (
                  ` $${property.rates.monthly.toLocaleString()}`
                ) : (
                  <CloseRoundedIcon sx={{ color: "#c53030" }} />
                )}
              </span>
            </Typography>
          </Box>
        </CardContent>
      </Paper>

      <Paper sx={{ p: 1, mt: 3 }} elevation={2}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bolder", mb: 2 }}>
            Description & Details
          </Typography>
          <Box display={"flex"} justifyContent={"space-around"} mb={4}>
            <Typography
              variant="h6"
              className={classes.container}
              sx={{
                color: "blue",
                gap: 1
              }}
            >
              <LocalHotelRoundedIcon /> {property.beds} Beds
            </Typography>
            <Typography
              variant="h6"
              className={classes.container}
              sx={{
                color: "blue",
                gap: 1
              }}
            >
              <BathtubRoundedIcon /> {property.baths} Baths
            </Typography>
            <Typography
              variant="h6"
              className={classes.container}
              sx={{
                color: "blue",
                gap: 1
              }}
            >
              <SquareFootRoundedIcon /> {property.square_feet} sqft
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            mb={2}
          >
            {property.description}
          </Typography>
        </CardContent>
      </Paper>

      <Paper sx={{ p: 1, mt: 3 }} elevation={2}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bolder", mb: 2 }}>
            Amenities
          </Typography>
          <List>
            <Grid container>
              {property.amenities.map((amenity, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <ListItem dense>
                    <ListItemIcon>
                      <CheckRoundedIcon sx={{ color: "green" }} />
                    </ListItemIcon>
                    <ListItemText primary={amenity} />
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </Box>
      </Paper>

      <Paper sx={{ p: 1, mt: 3 }} elevation={2}>
        <Typography variant="h6" sx={{ fontWeight: "bolder", mb: 2 }}>
          No location data found
        </Typography>
      </Paper>
    </>
  );
};

export default PropertyDetails;
