import { Box, InputBase, Typography, IconButton } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IoMdNotificationsOutline } from "react-icons/io";
import {  BiMessage } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";


const Header = () => {
  return (
    <Box
      sx={{
        padding: "12px",
        borderBottom: "1px solid #d5d4d4ff",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between"
      }}
    >
      {/* Search Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #d5d4d4ff",
          borderRadius: "5px",
          padding: "5px",
          width: "250px",
          transition: "box-shadow 0.3s ease",
          '&:focus-within': {
            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)',
           
          },
        }}
      >
        <InputBase
          placeholder="Search..."
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="submit" sx={{ p: '2px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>

      <Box sx={{display:"flex",gap:"15px",color:"#76787f",fontSize:"20px"}}>
        <IoMdNotificationsOutline/>
        <BiMessage/>
        <BsQuestionCircle/>
        <IoSettingsOutline/>
      </Box>
    </Box>
  );
};

export default Header;


