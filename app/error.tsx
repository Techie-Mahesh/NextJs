"use client";
import React from "react";
import { Container, Box, Paper, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Link from "next/link";

const ErrorPage = ({ error }) => {
  return (
    <Box
      sx={{
        bgcolor: "#EFF6FF",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Container maxWidth="md" sx={{ pt: 6, pb: 6, flexGrow: 1 }}>
        <Paper elevation={3} sx={{ p: 6, mb: 4, borderRadius: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <ErrorOutlineIcon style={{ color: "#FFEB3B", fontSize: "8rem" }} />
          </Box>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Something Went Wrong
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            {error.toString()}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Link href="/">
              <Button variant="contained" color="primary" size="large">
                Go Home
              </Button>
            </Link>
          </Box>
        </Paper>
      </Container>
      <Box sx={{ flexGrow: 1 }}></Box>
    </Box>
  );
};

export default ErrorPage;
