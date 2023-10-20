"use client"
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from "react";

// interface IProps {
//   value: number;
// }

const CircularProgressComponent = ( {value}: CircularProgressProps & 
{value: number },
const [percentage, setPercentage] = useState(11);
) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      {/* <CircularProgress variant="determinate" className='w-24' value={value}/> */}
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          className='text-base'
          component="div"
          color="text.secondary"
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressComponent;
