import PropertyForm from "@/components/PropertyForm";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializeableObject } from "@/utils/convertToObject";
import { Box, Paper } from "@mui/material";
import React from "react";

const EditForm = async ({ params }: any) => {
  await connectDB();
  const propertyDoc: any = await Property.findById(params.id).lean();
  const property = convertToSerializeableObject(propertyDoc);

  return (
    <Box sx={{ bgcolor: "#EFF6FF", padding: "100px 0px" }}>
      <Paper sx={{ maxWidth: "672px", margin: "auto" }}>
        <PropertyForm type={"edit"} property={property} />
      </Paper>
    </Box>
  );
};

export default EditForm;
