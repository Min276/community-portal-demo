"use client"
import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "@/app/data/colors";
import VerticalCard from "./VerticalCard";
import { useRouter} from "next/navigation";

interface IProps {
  data: any;
}

const HorizontalCard: FunctionComponent<IProps> = ({ data }) => {
  const router = useRouter();
  const limitDescription = (text: any) => {
    return text?.slice(" ", 170).concat("...");
  };

  const limitTitle = (text: any) => {
    return text?.slice(" ", 72).concat("...");
  };
  return (
    <>
      <Box
        display={{ xs: "none", sm: "flex" }}
        sx={{ cursor: "pointer" }}
        onClick={() => router.push(`/useful-info/news/${data.id}`)}
        bgcolor={colors.white}
        width="100%"
        height={250}
        alignItems="center"
        gap={3}
        borderRadius={2}
      >
        <img
          src={data.image}
          width="300px"
          style={{ borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}
          height="100%"
          alt="side-images"
        />
        <Box pr={3}>
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
      <Box display={{ xs: "flex", sm: "none" }}>
        <VerticalCard data={data} />
      </Box>
    </>
  );
};

export default HorizontalCard;
