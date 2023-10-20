"use client"
import { Box, Typography } from "@mui/material";
import { colors } from "@/app/data/colors";
import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import styles from "./custom.module.css"

interface IProps {
  data: any;
}

const VerticalCard: FunctionComponent<IProps> = ({ data }) => {
  const router = useRouter();
  const limitDescription = (text: any) => {
    return text?.slice(" ", 170).concat("...");
  };

  const limitTitle = (text: any) => {
    return text?.slice(" ", 55).concat("...");
  };

  return (
    <Box
      display="flex"
      sx={{ cursor: "pointer" }}
      onClick={() => router.push(`/useful-info/news/${data.id}`)}
      flexDirection="column"
      bgcolor={colors.white}
      width="100%"
      gap={3}
      maxWidth="100%"
      overflow="hidden"
      borderRadius={2}
    >
      <img
        src={data.image}
        style={{ borderTopRightRadius: "8px", borderTopLeftRadius: "8px" }}
        width="100%"
        height="100%"
        alt="side-images"
      />
      <Box px={3} pb={4}>
        <Typography fontSize={14.5} color={colors.lightblue}>
          {data.category}
        </Typography>
        <Typography
          my={1}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
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
          overflow="hidden"
          textOverflow="ellipsis"
         className={styles.text_box}
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

export default VerticalCard;
