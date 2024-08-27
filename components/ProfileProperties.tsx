"use client";
import deleteProperty from "@/app/actions/deleteProperty";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  Typography
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ProfileProperties = ({ properties }) => {
  const [profileProperties, setProfileProperties] = useState(properties);
  const [propertyId, setPropertyId] = useState("");
  const [open, setOpen] = useState(false);
  const handleDeleteProperty = async () => {
    setOpen(false);
    await deleteProperty(propertyId);
    setProfileProperties(
      profileProperties.filter(property => property._id !== propertyId)
    );
    toast.success("Property deleted successfully!!!", {
      position: "bottom-left"
    });
  };

  return (
    <>
      {profileProperties?.map(property => (
        <Box mb={5}>
          <CardContent>
            <Link href={`/properties/${property._id}`}>
              <CardMedia
                component="img"
                height="150"
                image={property?.images[0]}
                alt="green iguana"
                loading="lazy"
                sx={{ borderRadius: 2 }}
              />
            </Link>
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
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setOpen(true);
                setPropertyId(property._id);
              }}
            >
              Delete
            </Button>
          </CardActions>
        </Box>
      ))}
      {open && (
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogContent>
            <Typography variant="h6">
              Are you sure you want to delete this property?
            </Typography>
          </DialogContent>

          <DialogActions>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteProperty}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(false);
              }}
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default ProfileProperties;
