import { Fab, Typography } from "@mui/material";
import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const BookmarkButton = () => {
  return (
    <Fab variant="extended" color="primary">
      <BookmarkIcon sx={{ mr: 1 }} />
      <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
        Bookmark Property
      </Typography>
    </Fab>
  );
};

export default BookmarkButton;
