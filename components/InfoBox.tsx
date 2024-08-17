import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Paper
} from "@mui/material";
import React from "react";
import Link from "next/link";

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
        <Link href={info.buttonInfo.link}>
          <Button
            sx={{
              bgcolor: info.buttonInfo.backgroundColor,
              color: "white",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: info.buttonInfo.backgroundColor,
                opacity: 0.8
              }
            }}
            variant="contained"
          >
            {info.buttonInfo.text}
          </Button>
        </Link>
      </CardActions>
    </Paper>
  );
};

export default InfoBox;
