import React from "react";
import { Box, Grid } from "@mui/material";
import PropertyCard from "./PropertyCard";

const Properties = ({ properties }: any) => {
  return (
    <Grid container spacing={3} p={4}>
      {properties?.length > 0 ? (
        properties.map((item: any) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <PropertyCard property={item} />
          </Grid>
        ))
      ) : (
        <Box>No record found</Box>
      )}
    </Grid>
  );
};

export default Properties;
