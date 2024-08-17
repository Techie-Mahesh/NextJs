import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Container,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Input,
  FormHelperText,
  Fab
} from "@mui/material";
import React from "react";
import Textarea from "@mui/joy/Textarea";

const PropertyAddForm = () => {
  const formFields = [
    {
      id: "proprtyType",
      label: "Property Type",
      type: "select",
      value: "Apartment",
      options: ["Apartment", "House", "Condo", "Townhouse", "Land", "Other"],
      isRequired: true
    },
    {
      id: "listingName",
      label: "Listing Name",
      type: "text",
      value: "",
      placeholder: "eg. Beautiful Apartment In Miami",
      isRequired: true
    },
    {
      id: "description",
      label: "Description",
      type: "textArea",
      value: "",
      placeholder: "Add an optional description of your property"
    },
    {
      id: "location",
      label: "Location",
      type: "location",
      value: "",
      subFields: [
        {
          id: "strret",
          label: "Street",
          type: "text",
          value: "",
          placeholder: "Street"
        },
        {
          id: "city",
          label: "City",
          type: "text",
          value: "",
          placeholder: "City",
          isRequired: true
        },
        {
          id: "state",
          label: "State",
          type: "text",
          value: "",
          placeholder: "State",
          isRequired: true
        },
        {
          id: "zip",
          label: "Zip",
          type: "text",
          value: "",
          placeholder: "Zip",
          isRequired: true
        }
      ]
    },
    {
      id: "propertyDetails",
      type: "number",
      subfields: [
        {
          id: "beds",
          label: "Beds",
          type: "number",
          value: "",
          isRequired: true
        },
        {
          id: "baths",
          label: "Baths",
          type: "number",
          isRequired: true,
          value: ""
        },
        {
          id: "squareFeet",
          label: "Square Feet",
          type: "number",
          value: "",
          isRequired: true
        }
      ]
    },
    {
      id: "Amenities",
      label: "Amenities",
      type: "checkbox",
      value: "",
      options: [
        "Wifi",
        " Full kitchen",
        "Washer & Dryer",
        "Free Parking",
        "Swimming Pool",
        "Hot Tub",
        "24/7 Security",
        "Wheelchair Accessible",
        "Elevator Access",
        "Dishwasher",
        "Gym/Fitness Center",
        "Air Conditioning",
        "Balcony/Patio",
        "Smart TV",
        "Coffee Maker"
      ]
    },
    {
      id: "price",
      type: "number",
      label: "Rates (Leave blank if not applicable)",
      subfields: [
        {
          id: "monthly",
          type: "number",
          label: "Monthly",
          value: ""
        },
        {
          id: "weekly",
          type: "number",
          label: "Weekly",
          value: ""
        },
        {
          id: "nightly",
          type: "number",
          label: "Nightly",
          value: ""
        }
      ]
    },
    {
      id: "sellerName",
      label: "Seller Name",
      placeholder: "Name",
      type: "text",
      value: ""
    },
    {
      id: "sellerEmail",
      label: "Seller Email",
      placeholder: "Email",
      type: "text",
      value: "",
      isRequired: true
    },
    {
      id: "sellerPhone",
      label: "Seller Phone",
      placeholder: "Phone",
      type: "text",
      value: "",
      isRequired: true
    },
    {
      id: "images",
      label: "Images (Select up to 4 images)",
      type: "file",
      value: "",
      multiple: true,
      isRequired: true
    }
  ];
  return (
    <Container sx={{ padding: "24px 16px" }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 3 }}>
        Add Property
      </Typography>
      <form>
        <Box>
          {formFields.map(field => (
            <React.Fragment key={field.id}>
              <InputLabel>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bolder", color: "black", mb: 1 }}
                >
                  {field.label}
                </Typography>
              </InputLabel>

              <FormControl sx={{ mb: 2 }} fullWidth size="small">
                {field.type === "number" ? (
                  <Box sx={{ display: "flex", gap: 2 }}>
                    {field.subfields.map(subField => (
                      <FormControl>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: "bolder", color: "black", mb: 1 }}
                        >
                          {subField.label}
                        </Typography>
                        <OutlinedInput
                          type="number"
                          size="small"
                          required={field.isRequired}
                        />
                      </FormControl>
                    ))}
                  </Box>
                ) : field.type === "select" ? (
                  <Select
                    value={field.value}
                    //   onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {field.options.map(option => (
                      <MenuItem value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                ) : field.type === "text" ? (
                  <OutlinedInput
                    placeholder={field.placeholder}
                    size="small"
                    required={field.isRequired}
                  />
                ) : field.type === "textArea" ? (
                  <Textarea minRows={5} placeholder={field.placeholder} />
                ) : field.id === "location" ? (
                  field.subFields.map((subField, index) => (
                    <Box>
                      <FormControl
                        fullWidth
                        size="small"
                        sx={{ mb: 2 }}
                        key={subField.id}
                      >
                        <OutlinedInput
                          placeholder={subField.placeholder}
                          size="small"
                          tabIndex={index}
                          required={subField.isRequired}
                        />
                      </FormControl>
                    </Box>
                  ))
                ) : field.type === "checkbox" ? (
                  <FormControl>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)"
                      }}
                    >
                      {field.options.map(option => (
                        <FormControlLabel
                          key={option}
                          control={<Checkbox />}
                          label={option}
                        />
                      ))}
                    </Box>
                  </FormControl>
                ) : (
                  <OutlinedInput
                    id={field.id}
                    placeholder={field.placeholder}
                    size="small"
                    type="file"
                    inputProps={{ accept: "image/*", multiple: true }}
                    required={field.isRequired}
                  />
                )}
              </FormControl>
            </React.Fragment>
          ))}
        </Box>
        <Fab
          variant="extended"
          color="primary"
          sx={{ width: "100%" }}
          type="submit"
        >
          <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
            Add Property
          </Typography>
        </Fab>
      </form>
    </Container>
  );
};

export default PropertyAddForm;
