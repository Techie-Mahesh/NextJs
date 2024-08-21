import Box from "@mui/material/Box";

const PropertyHeaderImage = ({ image }: any) => {
  return (
    <Box component="section">
      <Box
        component="img"
        src={image[0]}
        alt=""
        sx={{ objectFit: "cover", height: "400px", width: "100%" }}
      />
    </Box>
  );
};

export default PropertyHeaderImage;
