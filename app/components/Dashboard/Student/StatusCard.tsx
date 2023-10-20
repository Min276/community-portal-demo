import { Box, Typography } from "@mui/material";
import { statusCard } from "@/app/data/siteData";

const StatusCard = () => {
  return (
    <>
      {statusCard.map((item: any, index: number) => (
        <Box
          key={index}
          sx={{ backgroundColor: '#F6F9FD', color: '#000' }}
          className="md:w-1/3 flex items-center py-5 rounded-xl"
        >
          <Box
            key={index}
            className="w-12 h-12 flex items-center justify-center bg-white shadow-md ml-6 mr-4 rounded-full"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.28149 6.31345H2.55517C3.60884 6.31345 4.47093 7.17555 4.47093 8.22922V17.808C4.47093 18.8617 3.60884 19.7238 2.55517 19.7238H2.28149C1.22782 19.7238 0.365723 18.8617 0.365723 17.808V8.22922C0.365723 7.17555 1.22782 6.31345 2.28149 6.31345ZM9.94454 0.566162C10.9982 0.566162 11.8603 1.42826 11.8603 2.48193V17.808C11.8603 18.8617 10.9982 19.7238 9.94454 19.7238C8.89087 19.7238 8.02878 18.8617 8.02878 17.808V2.48193C8.02878 1.42826 8.89087 0.566162 9.94454 0.566162ZM17.6076 11.5134C18.6613 11.5134 19.5234 12.3755 19.5234 13.4291V17.808C19.5234 18.8617 18.6613 19.7238 17.6076 19.7238C16.5539 19.7238 15.6918 18.8617 15.6918 17.808V13.4291C15.6918 12.3755 16.5539 11.5134 17.6076 11.5134Z"
                fill="#3b8cf7"
              />
            </svg>
          </Box>
          <Box className="flex flex-col">
            <Typography className="text-black text-[1.05rem]">{item.name}</Typography>
            <Typography className="text-black !text-xl">
              {item.quantity}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default StatusCard;
