"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Avatar, Badge, Grid, IconButton } from "@mui/material";
import { usePathname } from "next/navigation";
import GoogleIcon from "@mui/icons-material/Google";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#212121"
    }
  }
}));

export default function Navbar() {
  const pathname = usePathname();
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const routes = [
    {
      id: "home",
      label: "Home",
      href: "/",
      show: true
    },
    {
      id: "properties",
      label: "Properties",
      href: "/properties",
      show: isLoggedIn
    },
    {
      id: "addProperty",
      label: "Add Property",
      href: "/addproperty",
      show: true
    }
  ];
  return (
    <Box sx={{ flexGrow: 1, borderBottom: "1px solid white" }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent={"space-between"}>
            <Grid item sx={{ display: "flex" }}>
              <Avatar sx={{ bgcolor: "#fff", mr: 2 }}>
                <HomeRoundedIcon color="primary" />
              </Avatar>
              <Typography style={{ fontSize: "medium", margin: "auto" }}>
                Property Pulse
              </Typography>
              {routes.map(
                route =>
                  route.show && (
                    <Button
                      key={route.id}
                      color="inherit"
                      className={route.href === pathname ? classes.button : ""}
                      href={route.href}
                      sx={{
                        textTransform: "capitalize",
                        ml: 1,
                        bgcolor: route.href === pathname ? "#000000" : ""
                      }}
                      variant={route.href === pathname ? "contained" : "text"}
                    >
                      {route.label}
                    </Button>
                  )
              )}
            </Grid>

            <Grid item gap={2} sx={{ display: "flex", alignItems: "center" }}>
              {!isLoggedIn && (
                <Button
                  startIcon={<GoogleIcon />}
                  variant="contained"
                  className={classes.button}
                  sx={{
                    bgcolor: "#000000",
                    mr: 2,
                    textTransform: "capitalize"
                  }}
                >
                  Login or Register
                </Button>
              )}
              {isLoggedIn && (
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Badge badgeContent={4} color="error">
                    <CircleNotificationsIcon />
                  </Badge>
                  <AccountCircleIcon />
                </Box>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
