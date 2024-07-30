import React from "react";
import properties from "../properties.json";
import { Box, Grid } from "@mui/material";
import Property from "./Property";

const Properties = () => {
  return (
    <Grid container spacing={3} p={4}>
      {properties?.length > 0 ? (
        properties.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Property property={item} />
          </Grid>
        ))
      ) : (
        <Box>No record found</Box>
      )}
    </Grid>
  );
};

export default Properties;
