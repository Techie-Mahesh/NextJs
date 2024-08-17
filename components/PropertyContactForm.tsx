import {
  Box,
  CardContent,
  Fab,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import Textarea from "@mui/joy/Textarea";
import React from "react";

const PropertyContactForm = () => {
  const formFields = [
    {
      id: "name",
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
      value: ""
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Enter your email",
      type: "text",
      value: ""
    },
    {
      id: "phone",
      label: "Phone",
      placeholder: "Enter your phone number",
      type: "text",
      value: ""
    },
    {
      id: "message",
      label: "Message",
      placeholder: "Enter your message",
      type: "textArea",
      value: ""
    }
  ];
  return (
    <Paper>
      <CardContent>
        <Typography variant="h5" align="center" sx={{ mb: 2 }}>
          Contact Property Manager
        </Typography>
        <Box mb={3}>
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
              <FormControl sx={{ mb: 1 }} fullWidth>
                {field.type === "text" ? (
                  <OutlinedInput placeholder={field.placeholder} size="small" />
                ) : (
                  <Textarea minRows={5} placeholder={field.placeholder} />
                )}
              </FormControl>
            </React.Fragment>
          ))}
        </Box>
        <Fab variant="extended" color="primary" sx={{ width: "100%" }}>
          <TelegramIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
            Send Message
          </Typography>
        </Fab>
      </CardContent>
    </Paper>
  );
};

export default PropertyContactForm;
