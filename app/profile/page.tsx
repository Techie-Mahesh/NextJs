import ProfileProperties from "@/components/ProfileProperties";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializeableObject } from "@/utils/convertToObject";
import { getSessionUser } from "@/utils/getSessionUser";
import {
  Box,
  Container,
  Paper,
  CardHeader,
  Typography,
  Grid,
  Avatar
} from "@mui/material";
import React from "react";

const Profile = async () => {
  await connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser?.userId) {
    throw new Error("User ID is required");
  }

  const profileImage = sessionUser?.user?.image;
  const profileName = sessionUser?.user?.name;
  const profileEmail = sessionUser?.user?.email;
  const propertiesDocs = await Property.find({
    owner: sessionUser?.userId
  }).lean();
  const properties = propertiesDocs.map(convertToSerializeableObject);

  return (
    <Box sx={{ bgcolor: "#EFF6FF", padding: "100px 0" }}>
      <Paper sx={{ p: 2 }}>
        <CardHeader title="Your Profile" sx={{ mb: 2 }} />
        <Grid container>
          <Grid
            item
            xs={5}
            container
            direction="column"
            alignItems="center"
            sx={{ padding: "40px 0px" }}
          >
            <Avatar src={profileImage || ""} sx={{ height: 200, width: 200 }} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: "bolder" }}>
              {profileName}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {profileEmail}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Container>
              <Typography variant="h6" sx={{ fontWeight: "bolder", pl: 2 }}>
                Your listings
              </Typography>
            </Container>
            {properties.length > 0 ? (
              <ProfileProperties properties={properties} />
            ) : (
              <Typography variant="body1">
                {" "}
                You have not posted any listings yet.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;
