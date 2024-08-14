"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";

const ShareButtons = () => {
  return (
    <>
      <Typography variant="h5" align="center">
        Share This Property:
      </Typography>
      <Box display={"flex"} gap={2} margin={"auto"}>
        <FacebookOutlinedIcon fontSize="large" style={{ fill: "#0965fe" }} />
        <TwitterIcon fontSize="large" style={{ fill: "#3498db" }} />
        <WhatsAppIcon fontSize="large" style={{ fill: "#07bc0c" }} />
        <MailIcon fontSize="large" style={{ fill: "#0965fe" }} />
      </Box>
    </>
  );
};

export default ShareButtons;
