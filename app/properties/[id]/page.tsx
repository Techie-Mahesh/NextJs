import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import PropertyDetails from "@/components/PropertyDetails";

const PropertyPage = async ({ params }: any) => {
  await connectDB();
  const property: any = await Property.findById(params.id).lean();
  return (
    <>
      <PropertyHeaderImage />
      <Box sx={{ padding: "10px 30px" }}>
        <Link
          href="/properties"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "blue",
            "&:hover": { color: "darkblue" }
          }}
        >
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          Back to Properties
        </Link>
      </Box>
      <Box
        component="section"
        sx={{
          backgroundColor: "#EFF6FF",
          padding: "40px 24px",
          margin: "auto"
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <PropertyDetails property={property} />
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              bye
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PropertyPage;
