import { Avatar, Box, Grid, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#E5E7EB",
        mt: 3,
        p: 2
      }}
    >
      <Avatar sx={{ bgcolor: "#1976d2" }}>
        <HomeRoundedIcon sx={{ color: "white" }} />
      </Avatar>
      <Typography sx={{ ml: 1 }}>
        &copy; {currentYear} PropertyPulse. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
