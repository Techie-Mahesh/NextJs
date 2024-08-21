import PropertyForm from "@/components/PropertyForm";
import { Box, Paper, Container } from "@mui/material";
import React from "react";

const AddProperty = () => {
  return (
    <Box sx={{ bgcolor: "#EFF6FF", padding: "100px 0px" }}>
      <Paper sx={{ maxWidth: "672px", margin: "auto" }}>
        <PropertyForm type={"add"} />
      </Paper>
    </Box>
  );
};

export default AddProperty;
