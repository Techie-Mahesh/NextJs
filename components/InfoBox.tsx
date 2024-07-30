import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Paper
} from "@mui/material";
import React from "react";

interface InfoBox {
  header: string;
  content: string;
  backgroundColor: string;
  buttonInfo: {
    text: string;
    backgroundColor: string;
    link?: string;
  };
}

interface InfoBoxProps {
  info: InfoBox;
}

const InfoBox = (props: InfoBoxProps) => {
  const { info } = props;
  return (
    <Paper sx={{ bgcolor: info.backgroundColor, padding: 1 }} elevation={2}>
      <CardHeader title={info.header} />
      <CardContent>{info.content}</CardContent>
      <CardActions>
        <Button
          sx={{
            bgcolor: info.buttonInfo.backgroundColor,
            color: "white",
            textTransform: "capitalize"
          }}
          variant="contained"
          href={info.buttonInfo.link}
        >
          {info.buttonInfo.text}
        </Button>
      </CardActions>
    </Paper>
  );
};

export default InfoBox;
