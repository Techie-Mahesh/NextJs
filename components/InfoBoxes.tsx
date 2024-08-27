import { info } from "console";
import React from "react";
import InfoBox from "./InfoBox";
import { Box } from "@mui/material";

const InfoBoxes = () => {
  const infoBox = [
    {
      header: "For Renters",
      content:
        "Find your dream rental property. Bookmark properties and contact owners.",
      backgroundColor: "#F3F4F6",
      buttonInfo: {
        text: "Browse Property",
        backgroundColor: "#000000",
        link: "/properties"
      }
    },
    {
      header: "For Property Owners",
      content:
        "List your properties and reach potential tenants. Rent short or long term.",
      backgroundColor: "#DBEAFE",
      buttonInfo: {
        text: "Add Property",
        backgroundColor: "#3B82F6",
        link: "/properties/add"
      }
    }
  ];
  return (
    <Box
      display="flex"
      gap={2}
      justifyContent="center"
      sx={{ margin: "32px 0" }}
    >
      {infoBox.map((box, index) => (
        <InfoBox info={box} key={index} />
      ))}
    </Box>
  );
};

export default InfoBoxes;
