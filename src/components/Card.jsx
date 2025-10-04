import React from "react";
import { Box, Typography, Card as MuiCard,  } from "@mui/material";



const Card = ({ title, value, change, icon }) => {

  return (
    <MuiCard
      sx={{
        p: 4,
        borderRadius: "12px",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
        },
        backgroundColor: "white",
        width: "300px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "none",
        border: "1px solid #ccc"

      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" ,gap:"5px" }}>
        <Typography variant="caption" color="text.secondary" fontWeight="bold">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          fontSize="20px"
          fontWeight="bold"
          color="text.primary"
        >
          {value}
        </Typography>
        <Typography variant="caption" color="#15863eff">
          {change}
        </Typography>
      </Box>

      <Box
        sx={{
          p: 1,
          borderRadius: "8px",
          width: "36px",
          height: "36px",
         
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
    </MuiCard>
  );
};

export default Card;
