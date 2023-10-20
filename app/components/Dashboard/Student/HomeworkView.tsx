import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { homeworkView } from "@/app/data/siteData";

const HomeworkView = () => {
  return (
    <Box className="md:w-1/3 mb-4">
      <Box className="flex items-center justify-between bg-[#F6F9FD] rounded-t-xl p-6 pb-0">
        <Typography className="!text-[1.05rem] font-[600] ">Daily Schedule</Typography>
        <FaFilter className="text-lg" />
      </Box>
      <Box className="flex flex-col px-6 pb-6 pt-3 gap-y-4 rounded-b-xl bg-[#F6F9FE]">
        <Typography className="text-base text-[#A3AED0]">Today</Typography>
        {homeworkView
          ?.filter((item, index) => index <= 6)
          .map((item: any, index) => (
            <Box key={index} className="bg-white rounded-xl w-full">
              <Box className="flex justify-between items-center mx-6 my-5">
                <Box className="flex">
                  <Box className="flex flex-col gap-y-1">
                    <Typography className="text-[1.05rem]">{item.name}</Typography>
                    <Typography className="text-[#A3AED0] !text-sm">
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col gap-y-1">
                  <Typography
                    className="!text-[0.95rem]"
                    sx={{ color: item.color }}
                  >
                    {item.status}
                  </Typography>
                  <Typography className="text-[#A3AED0] !text-sm">
                    {item.timeCount}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        <Box className="flex justify-end">
          <Link href="/">
            <Typography className="!text-[#3B8CF7] flex items-center gap-x-2 py-2 cursor-pointer">
              {" "}
              See all <HiArrowRight />
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeworkView;
