"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import {
  Avatar,
  Badge,
  Fade,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Popper
} from "@mui/material";
import { usePathname } from "next/navigation";
import GoogleIcon from "@mui/icons-material/Google";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import makeStyles from "@mui/styles/makeStyles";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#212121"
    }
  }
}));

export default function Navbar() {
  const { data: session } = useSession();

  const profileImage = session?.user?.image;

  const pathname = usePathname();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [providers, setProviders] = useState(null);

  const profileList = [
    {
      id: "profile",
      label: "Your Profile",
      href: "/profile"
    },
    {
      id: "savedProperties",
      label: "Saved Properties",
      href: "/properties/saved"
    },
    {
      id: "signOut",
      label: "Sign Out",
      href: "/"
    }
  ];

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
      show: session
    },
    {
      id: "addProperty",
      label: "Add Property",
      href: "/properties/add",
      show: true
    }
  ];
  useEffect(() => {
    const fetchProperties = async () => {
      const res: any = await getProviders();
      setProviders(res);
    };
    fetchProperties();
  }, []);
  const handleProfile = (id: string) => {
    setAnchorEl(null);
    if (id === "signOut") {
      signOut();
    }
  };
  return (
    <Box sx={{ flexGrow: 1, borderBottom: "1px solid white" }}>
      <AppBar position="static" sx={{ p: 1 }}>
        <Toolbar>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item sx={{ display: "flex" }}>
              <Avatar sx={{ bgcolor: "#fff", ml: 3, mr: 1 }}>
                <HomeRoundedIcon color="primary" />
              </Avatar>
              <Typography variant="h5" sx={{ margin: "auto", mr: 1 }}>
                Property Pulse
              </Typography>
              {routes.map(
                route =>
                  route.show && (
                    <Link href={route.href} key={route.id}>
                      <Button
                        className={
                          route.href === pathname ? classes.button : ""
                        }
                        sx={{
                          textTransform: "capitalize",
                          ml: 1,
                          bgcolor: route.href === pathname ? "#000000" : "",
                          color: "white"
                        }}
                        variant={route.href === pathname ? "contained" : "text"}
                      >
                        {route.label}
                      </Button>
                    </Link>
                  )
              )}
            </Grid>

            <Grid item gap={2} sx={{ display: "flex", alignItems: "center" }}>
              {!session &&
                providers &&
                Object.values(providers).map((provider: any) => (
                  <Button
                    startIcon={<GoogleIcon />}
                    key={provider.id}
                    variant="contained"
                    onClick={() => signIn(provider.id)}
                    className={classes.button}
                    sx={{
                      bgcolor: "#000000",
                      mr: 2,
                      textTransform: "capitalize"
                    }}
                  >
                    Login or Register
                  </Button>
                ))}
              {session && (
                <>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <Link href="/messages">
                      <Badge badgeContent={4} color="error">
                        <CircleNotificationsIcon
                          fontSize="large"
                          sx={{ color: "white" }}
                        />
                      </Badge>
                    </Link>

                    <IconButton
                      onClick={event =>
                        setAnchorEl(anchorEl ? null : event.currentTarget)
                      }
                    >
                      <Avatar src={profileImage || ""} />
                    </IconButton>
                  </Box>
                  <Popper
                    sx={{ zIndex: 1200 }}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    placement={"bottom-end"}
                    transition
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                          <List>
                            {profileList.map(item => (
                              <ListItem disablePadding key={item.id}>
                                <Link href={item.href} passHref legacyBehavior>
                                  <ListItemButton>
                                    <ListItemText
                                      primary={item.label}
                                      onClick={() => handleProfile(item.id)}
                                    />
                                  </ListItemButton>
                                </Link>
                              </ListItem>
                            ))}
                          </List>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
