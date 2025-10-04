import { Box, Typography, Card as MuiCard, Avatar } from "@mui/material";
import React from "react";

const CardAct = ({ title, value, title1, value1, title2, value2, bgcolor, icon }) => {


  return (
    <MuiCard
      sx={{
        p: 3,
        borderRadius: "12px",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
        },
        backgroundColor: "white",
        width: "410px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        border: "1px solid #ccc"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar sx={{ bgcolor: bgcolor, }}>{icon}</Avatar> 
        <Box>
          <Typography variant="caption" color="textPrimary" fontWeight="bold" fontSize="16px">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize="14px"
            sx={{ color: "white", bgcolor: bgcolor, borderRadius: "100px", width: "80px", textAlign: "center", marginTop: "10px  " }}
          >
            {value}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Typography variant="caption" color="text.secondary" fontWeight="bold">
            {title1}
          </Typography>
          <Typography variant="subtitle1" fontSize="12px" color="textPrimary" fontWeight="bold">
            {value1}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Typography variant="caption" color="text.secondary" fontWeight="bold">
            {title2}
          </Typography>
          <Typography variant="subtitle1" fontSize="12px" color="textPrimary" fontWeight="bold">
            {value2}
          </Typography>
        </Box>
      </Box>
    </MuiCard>
  );
};


export default CardAct;
