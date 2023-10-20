import { Box, Typography } from "@mui/material";
import { NewsCardData } from "../../../data/news";
// import VideoCard from "./components/VerticalCard";
import VideoVerticalCard from "./components/VideoVerticalCard";
import { colors } from "../../../data/colors";

import dynamic from "next/dynamic";
const SideNews = dynamic(import("./components/SideNews"), {
  ssr: false,
});
const HorizontalCard = dynamic(import("./components/HorizontalCard"), {
  ssr: false,
});
const VerticalCard = dynamic(import("./components/VerticalCard"), {
  ssr: false,
});

const SchoolNews = () => {
  const data = [...NewsCardData].reverse();
  return (
    <Box
      display="flex"
      flexDirection="column"
      pt={4}
      pb={{ lg: "60px", md: "60px", xs: "40px" }}
      maxWidth="1250px"
      margin="auto"
      gap={8}
      px={{ sm: "20px", xs: "20px", md: "20px" }}
    >
      <Typography
        fontSize={{ xs: 20, md: 24 }}
        fontWeight={500}
        textAlign="center"
        mb={-4}
        color={colors.black}
      >
        News & Updates
      </Typography>
      <Box display="flex" flexDirection="column" gap={4}>
        <Box display="flex" flexDirection={{ xs: "column", lg: "row" }} gap={4}>
          <Box
            width={{ xs: "100%", lg: "33.333%" }}
            display="flex"
            flexDirection="column"
            gap={4}
          >
            <SideNews />
            <VerticalCard data={data[7]} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap={4}
            width={{ xs: "100%", lg: "66.666%" }}
          >
            <HorizontalCard data={data[8]} />
            {/* <VideoVerticalCard data={data[3]} /> */}
            <HorizontalCard data={data[9]} />
            {/* <HorizontalCard data={data[7]} />
            <HorizontalCard data={data[7]} /> */}
            <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr"}} gap="2rem">
            <VerticalCard data={data[10]} />
        <VerticalCard data={data[11]} />
            </Box>
            <HorizontalCard data={data[12]} />
            <HorizontalCard data={data[13]} />

          </Box>
        </Box>
        {/* <VideoVerticalCard data={data} /> */}
        <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr"}} gap={3}>
        <VerticalCard data={data[14]} />
        <VerticalCard data={data[15]} />
        <VerticalCard data={data[16]} />
        </Box>
      </Box>
    </Box>
  );
};

export default SchoolNews;
