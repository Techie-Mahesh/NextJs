import React from "react";
import { Box, Container, Grid } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

const PropertyImages = ({ images }: any) => {
  return (
    <Box sx={{ bgcolor: "#EFF6FF", p: 4 }}>
      {images.length === 1 ? (
        <ImageListItem>
          <img
            src={images[0]}
            alt=""
            style={{
              objectFit: "cover",
              height: 400,
              width: "100%",
              borderRadius: "16px"
            }}
            loading="eager"
          />
        </ImageListItem>
      ) : (
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid
              item
              key={index}
              xs={images.length === 3 && index === 2 ? 12 : 6}
            >
              <ImageListItem>
                <img
                  src={image}
                  alt=""
                  style={{
                    objectFit: "cover",
                    height: 400,
                    width: "100%",
                    borderRadius: "16px"
                  }}
                  loading="eager"
                />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default PropertyImages;
