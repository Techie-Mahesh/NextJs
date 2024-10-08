import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PropertyCard from "./PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";

const HomeProperties = async () => {
  await connectDB();
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();
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
              <PropertyCard property={item} />
            </Grid>
          ))
        ) : (
          <Box>No record found</Box>
        )}
      </Grid>
      <Box sx={{ textAlign: "center" }}>
        <Link href="/properties">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#000000",
              color: "white",
              textTransform: "capitalize",
              "&:hover": {
                bgcolor: "#000000",
                opacity: 0.8
              }
            }}
          >
            view more properties
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default HomeProperties;
