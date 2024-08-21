"use client";
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
import React, { useState, useEffect } from "react";
import Textarea from "@mui/joy/Textarea";
import addProperty from "@/app/actions/addProperty";
import updateProperty from "@/app/actions/updateProperty";

interface Location {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface PropertyDetails {
  beds: string;
  baths: string;
  squareFeet: string;
}

interface Price {
  monthly: string;
  weekly: string;
  nightly: string;
}

interface FormValues {
  propertyType: string;
  listingName: string;
  description: string;
  location: Location;
  propertyDetails: PropertyDetails;
  amenities: string[];
  price: Price;
  sellerName: string;
  sellerEmail: string;
  sellerPhone: string;
  images: File[];
}

const PropertyForm: React.FC = ({ property, type }) => {
  const initialFormValues = {
    propertyType: "Apartment",
    listingName: "",
    description: "",
    location: {
      street: "",
      city: "",
      state: "",
      zip: ""
    },
    propertyDetails: {
      beds: "",
      baths: "",
      squareFeet: ""
    },
    amenities: [],
    price: {
      weekly: "",
      monthly: "",
      nightly: ""
    },
    sellerName: "",
    sellerEmail: "",
    sellerPhone: "",
    images: []
  };

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  useEffect(() => {
    if (property) {
      setFormValues({
        propertyType: property.type,
        listingName: property.name,
        description: property.description,
        location: {
          street: property.location.street,
          city: property.location.city,
          state: property.location.state,
          zip: property.location.zipcode
        },
        propertyDetails: {
          beds: property.beds,
          baths: property.baths,
          squareFeet: property.square_feet
        },
        amenities: property.amenities,
        price: {
          weekly: property.rates.weekly,
          monthly: property.rates.monthly,
          nightly: property.rates.nightly
        },
        sellerName: property.seller_info.name,
        sellerEmail: property.seller_info.email,
        sellerPhone: property.seller_info.phone,
        images: property.images
      });
    }
  }, [property]);

  const {
    propertyType,
    listingName,
    description,
    location,
    propertyDetails,
    amenities,
    price,
    sellerName,
    sellerEmail,
    sellerPhone,
    images
  } = formValues;
  const formFields = [
    {
      id: "propertyType",
      label: "Property Type",
      type: "select",
      value: propertyType,
      options: ["Apartment", "House", "Condo", "Townhouse", "Land", "Other"],
      isRequired: true
    },
    {
      id: "listingName",
      label: "Listing Name",
      type: "text",
      value: listingName,
      placeholder: "eg. Beautiful Apartment In Miami",
      isRequired: false
    },
    {
      id: "description",
      label: "Description",
      type: "textArea",
      value: description,
      placeholder: "Add an optional description of your property"
    },
    {
      id: "location",
      label: "Location",
      type: "location",
      value: "",
      subFields: [
        {
          id: "street",
          label: "street",
          type: "text",
          value: location.street,
          placeholder: "street"
        },
        {
          id: "city",
          label: "City",
          type: "text",
          value: location.city,
          placeholder: "City",
          isRequired: false
        },
        {
          id: "state",
          label: "State",
          type: "text",
          value: location.state,
          placeholder: "State",
          isRequired: false
        },
        {
          id: "zip",
          label: "Zip",
          type: "text",
          value: location.zip,
          placeholder: "Zip",
          isRequired: false
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
          value: propertyDetails.beds,
          isRequired: false
        },
        {
          id: "baths",
          label: "Baths",
          type: "number",
          isRequired: false,
          value: propertyDetails.baths
        },
        {
          id: "squareFeet",
          label: "Square Feet",
          type: "number",
          value: propertyDetails.squareFeet,
          isRequired: false
        }
      ]
    },
    {
      id: "amenities",
      label: "Amenities",
      type: "checkbox",
      value: amenities,
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
          value: price?.monthly
        },
        {
          id: "weekly",
          type: "number",
          label: "Weekly",
          value: price.weekly
        },
        {
          id: "nightly",
          type: "number",
          label: "Nightly",
          value: price.nightly
        }
      ]
    },
    {
      id: "sellerName",
      label: "Seller Name",
      placeholder: "Name",
      type: "text",
      value: sellerName
    },
    {
      id: "sellerEmail",
      label: "Seller Email",
      placeholder: "Email",
      type: "text",
      value: sellerEmail,
      isRequired: false
    },
    {
      id: "sellerPhone",
      label: "Seller Phone",
      placeholder: "Phone",
      type: "text",
      value: sellerPhone,
      isRequired: false
    },
    {
      id: "images",
      label: "Images (Select up to 4 images)",
      type: "file",
      value: images,
      multiple: true,
      isRequired: true
    }
  ];
  console.log("formFields ==>", formFields);

  const handleInputChange = (id: string, value: any, option?: any) => {
    setFormValues((prevValues: any) => {
      const updateAmenities = () => ({
        ...prevValues,
        [id]: value
          ? [...prevValues[id], option]
          : prevValues[id].filter((item: any) => item !== option)
      });

      const updateNestedValues = () => ({
        ...prevValues,
        [id]: {
          ...prevValues[id],
          ...value
        }
      });

      const updateSimpleValue = () => ({
        ...prevValues,
        [id]: value
      });
      const updateImages = () => {
        const updatedImages = [...prevValues[id]];
        for (const file of value) {
          updatedImages.push(file);
        }
        return {
          ...prevValues,
          [id]: updatedImages
        };
      };

      const updateFunctions: Record<string, () => any> = {
        amenities: updateAmenities,
        location: updateNestedValues,
        price: updateNestedValues,
        propertyDetails: updateNestedValues,
        images: updateImages
      };

      return updateFunctions[id] ? updateFunctions[id]() : updateSimpleValue();
    });
  };
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };
  const convertImagesToBase64 = async (formValues: any) => {
    const updatedImages = await Promise.all(
      formValues.images.map(async (file: File) => await fileToBase64(file))
    );
    return {
      ...formValues,
      images: updatedImages
    };
  };
  const handleAddProperty = async () => {
    const updatedFormValues = await convertImagesToBase64(formValues);
    const data = JSON.stringify(updatedFormValues);
    addProperty(data);
  };
  const handleEditProperty = async()=>{
    const data = JSON.stringify(formValues);
    updateProperty(data, property._id);
  }

  return (
    <Container sx={{ padding: "24px 16px" }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 3 }}>
        {type === "edit" ? "Edit Property " : "Add Property"}
      </Typography>
      <Box>
        {formFields.map((field: any) => (
          <React.Fragment key={field.id}>
            {type === "add" ||
              (type === "edit" && field.type !== "file" && (
                <InputLabel htmlFor={field.id}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bolder", color: "black", mb: 1 }}
                  >
                    {field.label}
                  </Typography>
                </InputLabel>
              ))}

            <FormControl sx={{ mb: 2 }} fullWidth size="small">
              {field.type === "number" ? (
                <Box sx={{ display: "flex", gap: 2 }}>
                  {field.subfields.map((subField: any) => (
                    <FormControl>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bolder", color: "black", mb: 1 }}
                      >
                        {subField.label}
                      </Typography>
                      <OutlinedInput
                        name={field.id}
                        type="number"
                        size="small"
                        required={field.isRequired}
                        value={subField.value}
                        onChange={e =>
                          handleInputChange(field.id, {
                            [subField.id]: e.target.value
                          })
                        }
                      />
                    </FormControl>
                  ))}
                </Box>
              ) : field.type === "select" ? (
                <Select
                  value={field.value}
                  onChange={e => handleInputChange(field.id, e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {field.options.map((option: any) => (
                    <MenuItem value={option}>{option}</MenuItem>
                  ))}
                </Select>
              ) : field.type === "text" ? (
                <OutlinedInput
                  placeholder={field.placeholder}
                  size="small"
                  required={field.isRequired}
                  value={field.value}
                  onChange={e => handleInputChange(field.id, e.target.value)}
                />
              ) : field.type === "textArea" ? (
                <Textarea
                  minRows={5}
                  placeholder={field.placeholder}
                  required={field.isRequired}
                  value={field.value}
                  onChange={e => handleInputChange(field.id, e.target.value)}
                />
              ) : field.id === "location" ? (
                field.subFields.map((subField: any, index: any) => (
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
                        value={subField.value}
                        onChange={e =>
                          handleInputChange(field.id, {
                            [subField.id]: e.target.value
                          })
                        }
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
                    {field.options.map((option: any) => (
                      <FormControlLabel
                        key={option}
                        control={
                          <Checkbox
                            checked={field?.value?.includes(option)}
                            onChange={e =>
                              handleInputChange(
                                field.id,
                                e.target.checked,
                                option
                              )
                            }
                          />
                        }
                        label={option}
                      />
                    ))}
                  </Box>
                </FormControl>
              ) : (
                type === "add" && (
                  <OutlinedInput
                    id={field.id}
                    placeholder={field.placeholder}
                    size="small"
                    type="file"
                    inputProps={{ accept: "image/*", multiple: true }}
                    required={field.isRequired}
                    onChange={e =>
                      handleInputChange(
                        field.id,
                        (e.target as HTMLInputElement).files
                      )
                    }
                  />
                )
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
        onClick={type === "add" ? handleAddProperty : handleEditProperty}
      >
        <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
          {type === "edit" ? "Update Property " : "Add Property"}
        </Typography>
      </Fab>
    </Container>
  );
};

export default PropertyForm;
