import Box from "@mui/material/Box";

const PropertyHeaderImage = ({ image }: any) => {
  return (
    <Box component="section">
      <Box
        component="img"
        src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
        alt=""
        sx={{ objectFit: "cover", height: "400px", width: "100%" }}
      />
    </Box>
  );
};

export default PropertyHeaderImage;
