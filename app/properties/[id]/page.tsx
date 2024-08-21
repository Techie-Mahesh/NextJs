import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import PropertyDetails from "@/components/PropertyDetails";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButtons from "@/components/ShareButtons";
import PropertyContactForm from "@/components/PropertyContactForm";
import PropertyImages from "@/components/PropertyImages";

const PropertyPage = async ({ params }: any) => {
  await connectDB();
  const property: any = await Property.findById(params.id).lean();
  return (
    <>
      <PropertyHeaderImage image={property.images} />
      <Box sx={{ padding: "10px 30px" }}>
        <Link href="/properties">
          <Button
            startIcon={<ArrowBackIcon />}
            color="inherit"
            aria-label="back"
            variant="text"
            sx={{
              color: "blue",
              "&:hover": { color: "darkblue" }
            }}
          >
            Back to Properties
          </Button>
        </Link>
      </Box>
      <Box
        component="section"
        sx={{
          backgroundColor: "#EFF6FF",
          padding: "40px 30px",
          margin: "auto"
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <PropertyDetails property={property} />
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <BookmarkButton />
              <ShareButtons />
              <PropertyContactForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyPage;
