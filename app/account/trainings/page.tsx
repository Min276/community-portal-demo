"use client"
// import CircularProgressComponent from "@/app/components/Cards/CircularProgressComponent";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react";
import { Box, Typography } from "@mui/material"
import './common.css'

const Trainings = () => {
    const [percentage, setPercentage] = useState(11);
    return(
    <Box>
        <Box
        className="flex justify-between items-center p-6 px-7 rounded-lg cursor-pointer mr-10"
        sx={{ boxShadow: "rgba(0, 0, 0, 0.25) 1px 1px 10px" }}
      >
        <Box className="flex items-center">
          {/* <Box className="w-10 h-10 flex justify-center mr-2 items-center bg-[#3b8cf7] rounded-full">
            <Typography className="text-white font-bold">SK</Typography>
          </Box> */}
          <Box className="mr-4 w-12">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />

                    </Box>
          <Typography className="text-[1.05rem] text-[#737373]">Skill Training One</Typography>
        </Box>
        <Box className="flex items-center">
          <Typography className="text-[#737373] mr-3">Status: </Typography>
          <Box className="px-2 py-1.5 bg-[#3b8cf7] text-white rounded-md">
            <Typography className="text-sm">In Progress</Typography>
          </Box>
        </Box>
        <Box className="flex items-center">
          <Typography className="text-[#9C9C9C] pr-4 border-r-2">
            Total <span className="text-[#333333]">60</span> modules
          </Typography>
          <Typography className="text-[#9C9C9C] px-4 border-l">
            <span className="text-[#3B8CF7]">7</span> Completed
          </Typography>
        </Box>
        
      </Box>
      
    </Box>
    )
}

export default Trainings