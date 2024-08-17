import PropertyAddForm from "@/components/PropertyAddForm";
import { Box, Paper, Container } from "@mui/material";
import React from "react";

const AddProperty = () => {
  return (
    <Box sx={{ bgcolor: "#EFF6FF", padding: "100px 0px" }}>
      <Paper sx={{ maxWidth: "672px", margin: "auto" }}>
        <PropertyAddForm />
      </Paper>
    </Box>
  );
};

export default AddProperty;
