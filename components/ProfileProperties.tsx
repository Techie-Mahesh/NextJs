"use client";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const ProfileProperties = ({ properties }) => {
  const [profileProperties, setProfileProperties] = useState(properties);

  return profileProperties?.map(property => (
    <Box mb={5}>
      <CardContent>
        <CardMedia
          component="img"
          height="150"
          image={property?.images[0]}
          alt="green iguana"
          loading="lazy"
          sx={{ borderRadius: 2 }}
        />
        <Typography variant="h6" sx={{ mt: 2, fontWeight: "bolder" }}>
          {property.name}
        </Typography>
        <Typography variant="body1">
          Address: {property.location.street} {property.location.city}{" "}
          {property.location.state}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/properties/${property._id}/edit`}>
          <Button variant="contained">Edit</Button>
        </Link>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </CardActions>
    </Box>
  ));
};

export default ProfileProperties;
