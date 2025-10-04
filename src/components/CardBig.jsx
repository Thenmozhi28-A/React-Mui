import React from "react";
import { Box, Typography, Card as MuiCard } from "@mui/material";
import { SlArrowRight } from "react-icons/sl";

const CardBig = ({ title, value, icon }) => {
  return (
    <MuiCard
      sx={{
        p: 4,
        borderRadius: "12px",
        backgroundColor: "white",
        width: "630px",
         boxShadow: "none",
        border: "1px solid #ccc"
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption" color="black" fontSize="16px" fontWeight="medium">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize="12px"
            color="primary"
            sx={{ cursor: "pointer",display:"flex",gap:"5px",alignItems:"center" }}
            
          >
            {value}<SlArrowRight />
          </Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"row",gap:"10px",alignItems:"center",justifyContent:"center"}}>
        <Box
          sx={{
            p: 1,
            borderRadius: "8px",
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding:"100px"
          }}
        >
          {icon}
        </Box>
        <Box>
            <Typography sx={{fontSize:"12px",color:"#aaacb2ff"}}>Interactive chart would appear here</Typography>
        </Box>

        </Box>
      </Box>
    </MuiCard>
  );
};

export default CardBig;
