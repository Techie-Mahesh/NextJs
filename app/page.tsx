import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box style={{ flex: 1 }}>
        <Hero />
      </Box>
      <Box style={{ flex: 1 }}>
        <InfoBoxes />
      </Box>
    </Box>
  );
}
