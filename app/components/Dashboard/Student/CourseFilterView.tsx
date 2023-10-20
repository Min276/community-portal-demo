"use client"
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { coursesData } from "@/app/data/siteData";

const CourseFilterView = () => {
  const [value, setValue] = useState<any>("");
  return (
    <Box className="mb-6">
      <Box className="flex flex-col md:flex-row gap-y-2 items-center justify-between bg-[#F6F9FD] rounded-t-xl p-8 pb-0">
        <Typography className="!text-[1.05rem] !font-semibold">My Courses</Typography>
        <Box className=" flex gap-x-6 items-center">
          <Box
            className={`cursor-pointer px-2 md:px-6 py-1 rounded-md ${
              value === "" ? "bg-[#3B8CF7] text-white" : ""
            }`}
            onClick={() => setValue("")}
          >
            <Typography>All</Typography>
          </Box>
          <Box
            className={`cursor-pointer px-2 md:px-6 py-1 rounded-md ${
              value ? "bg-[#3B8CF7] text-white" : ""
            }`}
            onClick={() => setValue(true)}
          >
            <Typography>Ongoing</Typography>
          </Box>
          <Box
            className={`cursor-pointer px-2 md:px-6 py-1 rounded-md ${
              value === false ? "bg-[#3B8CF7] text-white" : ""
            }`}
            onClick={() => setValue(false)}
          >
            <Typography>Completed</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-col px-4 md:px-6 py-6 gap-y-4 rounded-b-xl bg-[#F6F9FE]">
        {coursesData
          ?.filter((item, index) =>
            index <= 3 && value === "" ? true : item.status === value
          )
          .map((item: any, index) => (
            <Box key={index} className="bg-white rounded-xl w-full">
              <Box className="flex justify-between items-center mx-4 md:mx-6 my-4">
                <Box className="flex">
                  <Box className="w-12 h-12 flex items-center justify-center bg-[#F6F9FE] mr-4 rounded-full">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 4.25H18V6.25H2V4.25ZM4 0.25H16V2.25H4V0.25ZM18 8.25H2C0.9 8.25 0 9.15 0 10.25V18.25C0 19.35 0.9 20.25 2 20.25H18C19.1 20.25 20 19.35 20 18.25V10.25C20 9.15 19.1 8.25 18 8.25ZM18 18.25H2V10.25H18V18.25ZM8 10.98V17.51L14 14.25L8 10.98Z"
                        fill="#3B8CF7"
                      />
                    </svg>
                  </Box>
                  <Box className="flex flex-col">
                    <Typography className="text-[1.05rem]">{item.name}</Typography>
                    <Typography className="text-[#A3AED0] !text-sm">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
                <Typography className="!text-[#3B8CF7]">
                  <Link href={item.link}>View Course</Link>
                </Typography>
              </Box>
            </Box>
          ))}
        <Box className="flex justify-end">
          <Link href="/">
            <Typography className="!text-[#3B8CF7] flex items-center gap-x-2 py-2 cursor-pointer">
              {" "}
              View all <HiArrowRight />
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseFilterView;
