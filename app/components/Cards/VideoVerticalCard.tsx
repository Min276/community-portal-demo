"use client"
import { Box, Typography } from "@mui/material";
import { colors } from "@/app/data/colors";
import { FunctionComponent } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import styles from "./custom.module.css";

interface IProps {
  data: any;
}

const VideoVerticalCard: FunctionComponent<IProps> = ({ data }) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 0,
    },
  };

  const limitDescription = (text: any) => {
    return text?.slice(" ", 170).concat("...");
  };

  const limitTitle = (text: any) => {
    return text?.slice(" ", 100).concat("...");
  };

  return (
    <Box
      display="flex"
      borderRadius="8px"
      sx={{ cursor: "pointer" }}
      flexDirection="column"
      bgcolor={colors.white}
      width="100%"
      gap={3}
    >
      <YouTube
        videoId="xWUR778F334"
        opts={opts}
        onReady={onPlayerReady}
        iframeClassName={styles.youtube_box}
      />

      <Box px={3} pb={4}>
        <Typography fontSize={14.5} color={colors.lightblue}>
          {data.category}
        </Typography>
        <Typography
          my={1}
          fontSize={{ xs: 18, md: 20 }}
          fontWeight={500}
          color={colors.black}
        >
          {limitTitle(data.title)}
        </Typography>
        <Typography
          mb={2}
          fontSize={{ xs: 14, md: 15 }}
          color={colors.darkGrey}
        >
          {limitDescription(data.description)}
        </Typography>
        <Typography fontSize={14.5} color={colors.grey}>
          {data.date}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoVerticalCard;
