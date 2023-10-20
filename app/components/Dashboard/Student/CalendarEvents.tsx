"use client"
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { eventsData } from "@/app/data/siteData";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const CalendarEvents = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));

  return (
    <Box className="bg-[#F6F9FE] p-4 md:p-6 rounded-xl flex flex-col md:flex-row gap-y-6 gap-x-6">
      <LocalizationProvider dateAdapter={AdapterDayjs} className="md:w-1/2">
        <DateCalendar
          className="shadow-md bg-white !w-full md:!w-1/2 rounded-xl"
          date={date}
          onChange={(newDate) => setDate(newDate)}
        />
      </LocalizationProvider>
      <Box className="md:w-1/2 bg-white rounded-b-lg shadow-lg">
        <Box className="bg-[#3b8cf7] p-4 rounded-t-lg">
          <Typography className="text-white !font-semibold">
            Upcoming Events
          </Typography>
        </Box>
        <Box className="w-full flex flex-col m-6 gap-y-6">
          {eventsData?.filter((item, index) => index <= 2)
          .map((item: any, index) => (
            <Box
              key={index}
              sx={{ borderColor: '#3b8cf7' }}
              className="flex flex-col border-l-4 px-4"
            >
              <Typography>{item.name}</Typography>
              <Typography className="!text-sm text-[#A3AED0]">
                {item.time}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className="flex justify-end">
          <Link href="/">
            <Typography className="!text-[#3B8CF7] flex items-center gap-x-2 pr-4 pb-6 cursor-pointer">
              {" "}
              View all events <HiArrowRight />
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default CalendarEvents;
