"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography
} from "@mui/material";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1976d2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h3" sx={{ color: "white" }} align="center">
        Find The Perfect Rental
      </Typography>
      <Typography align="center" sx={{ color: "white" }}>
        {" "}
        Discover the perfect property that suits your needs.
      </Typography>
      <Grid container justifyContent={"center"} spacing={1} sx={{ mt: 2 }}>
        <Grid item xs={3}>
          <FormControl variant="filled" fullWidth size="small">
            <OutlinedInput
              sx={{ bgcolor: "white" }}
              aria-describedby="outlined-weight-helper-text"
              placeholder="Enter Location (Coty, Zip,State)"
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">All</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="All"
              onChange={() => {}}
              sx={{ bgcolor: "white" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            style={{ backgroundColor: "cornflowerblue" }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
