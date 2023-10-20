import { Box, Typography } from "@mui/material";
import { NewsCardData as data } from "@/app/data/siteData";
// import VideoCard from "./components/VerticalCard";
// import VideoVerticalCard from "./components/VideoVerticalCard";
import HorizontalCard from "@/app/components/Cards/HorizontalCard";
import VerticalCard from "@/app/components/Cards/VerticalCard";
import VideoVerticalCard from "@/app/components/Cards/VideoVerticalCard";
import { colors } from "@/app/data/colors";

const Orientation = () => {
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
      {/* <Typography
        fontSize={{ xs: 20, md: 24 }}
        fontWeight={500}
        textAlign="center"
        mb={-4}
        color={colors.black}
      >
        News & Updates
      </Typography> */}
      <Box display="flex" flexDirection="column" gap={4}>
        <Box display="flex" gap={4}>
          <Box
            display="flex"
            flexDirection="column"
            gap={4}
            width={{ xs: "100%", lg: "100%" }}
            className="w-2/3"
          >
            <VideoVerticalCard data={data[1]} />
            {/* <VideoVerticalCard data={data[3]} /> */}
            <HorizontalCard data={data[1]} />
            {/* <HorizontalCard data={data[7]} />
            <HorizontalCard data={data[7]} /> */}
            {/* <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr"}} gap="2rem">
            <VerticalCard data={data[1]} />
        <VerticalCard data={data[1]} />
            </Box> */}
            <HorizontalCard data={data[1]} />
            <HorizontalCard data={data[1]} />

          </Box>
          <Box display="flex" flexDirection="column" gap={4} className="w-1/3">
      <VerticalCard data={data[1]} />
        <VerticalCard data={data[1]} />
        <VerticalCard data={data[1]} />
        </Box>
        </Box>
        {/* <VideoVerticalCard data={data} /> */}
      </Box>
    </Box>
  );
};

export default Orientation;
