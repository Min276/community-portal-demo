"use client"
import { useState } from "react";
import { Box, PopperPlacementType, Fade, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { SideBarNavData } from "@/app/data/siteData";
import Link from "next/link";
import { SlOptionsVertical } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi"
import Popper from "@mui/material/Popper";

const SideNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();

  const handleClick =
  (newPlacement: PopperPlacementType) =>
  (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

    return(
  <Box className="w-1/5 shadow-md max-h-screen flex flex-col gap-2">
    <Box className="w-full mt-3 flex justify-center">
       <Link href="/" className="mr-1">
        <Image src="/assets/navbar/logo.svg" width="200" height="200" alt="logo" />
        </Link>
</Box>
    {SideBarNavData.map((item, index) => (
      <Box key={item.title} className="p-4 pl-6 hover:bg-gray-100 rounded-xl">
        <Link href={item.link} className="flex items-center gap-3">
        <Image src={item.icon} width="25" height="25" alt="icon" />
        {/* <span className="material-symbols-outlined">{item.icon}</span> */}

        <h4>{item.title}</h4>
        </Link>
      </Box>
    ))}
    <Box className="flex mt-28 justify-between items-center px-6">
    <Link href="/account/profile" className="flex items-center gap-1.5">
    <Image src="/assets/navbar/avator.svg" width="35" height="35" alt="avatar" />
    <h4 className="text-base">Min Khant 276</h4>
    </Link>
    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Link href="/" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100">
               <FiLogOut fontSize="20" /> Logout
              </Link>
            </Paper>
          </Fade>
        )}
      </Popper>
    <SlOptionsVertical className="cursor-pointer" onClick={handleClick('right')} />
    </Box>
  </Box>
    )
};
export default SideNavbar;
