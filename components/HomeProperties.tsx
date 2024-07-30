import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import properties from "../properties.json";
import Property from "./Property";

const HomeProperties = () => {
  const recentProperties = properties.slice(0, 3);
  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: "#3B82F6" }}
        align="center"
      >
        Recent Properties
      </Typography>
      <Grid container spacing={3} p={4}>
        {recentProperties?.length > 0 ? (
          recentProperties.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <Property property={item} />
            </Grid>
          ))
        ) : (
          <Box>No record found</Box>
        )}
      </Grid>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          href="./properties"
          sx={{
            bgcolor: "#000000",
            color: "white",
            textTransform: "capitalize"
          }}
        >
          view more properties
        </Button>
      </Box>
    </>
  );
};

export default HomeProperties;
