import React from 'react';
import {
  Box,
  Grid,
  List,
  Typography,
  IconButton,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import MenuIcon from "@mui/icons-material/Menu";
import { CiGrid42 } from "react-icons/ci";
import { SiSimpleanalytics } from "react-icons/si";
import { FiShoppingCart } from "react-icons/fi";
import { LuBox } from "react-icons/lu";
import { LuTag } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { PiVanLight } from "react-icons/pi";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";
import { SiElectronbuilder } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ isOpen, onToggle }) => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const mainNavItems = [
    { icon: <CiGrid42 />, label: "Overview" },
    { icon: <SiSimpleanalytics />, label: "Analytics" },
    { icon: <FiShoppingCart />, label: "Orders" },
    { icon: <LuBox />, label: "Inventory" },
    { icon: <LuTag />, label: "Products" },
    { icon: <GoPeople />, label: "Customers" },
    { icon: <PiVanLight />, label: "Logistics" },
    { icon: <BsCurrencyDollar />, label: "Finance" },
    { icon: <RiErrorWarningLine />, label: "Risk Management" },
  ];

  const agentNavItems = [
    { icon: <MdElectricBolt />, label: "Agent Status" },
    { icon: <SiElectronbuilder />, label: "Agent Builder" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        padding: "10px",
        borderRight: "1px solid #d5d4d4ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isOpen ? "space-between" : "center",
            gap: "5px",
            marginTop: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <ElectricBoltIcon sx={{ color: "#4c55e3", fontSize: "25px" }} />
            {isOpen && (
              <Typography
                sx={{
                  color: "#4c55e3",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                CommercePilot
              </Typography>
            )}
          </Box>
          <IconButton onClick={onToggle} sx={{ padding: "0px" }}>
            <MenuIcon sx={{ color: "#72757c" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            fontSize: "14px",
            fontWeight: "medium",
            gap: "5px",
            borderTop: "1px solid #d5d4d4ff",
            paddingTop: "10px",
          }}
        >
          {mainNavItems.map((item, index) => (
            <List
              key={index}
              onClick={() => handleItemClick(index)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: isOpen ? "flex-start" : "center",
                gap: isOpen ? "10px" : "0",
                cursor: "pointer",
                paddingY: "5px",
                paddingX: "10px",
                borderRadius: "4px",
                bgcolor: selectedItem === index ? "#4c55e320" : "transparent",
                "&:hover": {
                  bgcolor: "#f0f0f0",
                },
                color: selectedItem === index ? "#4c55e3" : "black",
                "& svg": {
                  color: selectedItem === index ? "#4c55e3" : "black",
                },
              }}
            >
              {item.icon}
              {isOpen && <Typography sx={{ fontSize: "14px" }}>{item.label}</Typography>}
            </List>
          ))}

          <Box
            sx={{
              marginTop: "15px",
              borderTop: "1px solid #d5d4d4ff",
              paddingTop: "20px",
            }}
          >
            {isOpen && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#727272ff",
                  fontWeight: "medium",
                }}
              >
                AGENT MANAGEMENT
              </Typography>
            )}
            {agentNavItems.map((item, index) => (
              <List
                key={index + mainNavItems.length}
                onClick={() => handleItemClick(index + mainNavItems.length)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isOpen ? "flex-start" : "center",
                  gap: isOpen ? "10px" : "0",
                  fontSize: "14px",
                  marginTop: "10px",
                  cursor: "pointer",
                  paddingY: "5px",
                  paddingX: "10px",
                  borderRadius: "4px",
                  bgcolor:
                    selectedItem === index + mainNavItems.length ? "#4c55e320" : "transparent",
                  "&:hover": {
                    bgcolor: "#f0f0f0",
                  },
                  color: selectedItem === index + mainNavItems.length ? "#4c55e3" : "black",
                  "& svg": {
                    color: selectedItem === index + mainNavItems.length ? "#4c55e3" : "black",
                  },
                }}
              >
                {item.icon}
                {isOpen && <Typography sx={{ fontSize: "14px" }}>{item.label}</Typography>}
              </List>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #d5d4d4ff",
          paddingTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: isOpen ? "flex-start" : "center",
          gap: isOpen ? "10px" : "0",
        }}
      >
        <CgProfile color="#6e7378" size={25} />
        {isOpen && (
          <Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "medium" }}>
              Emma Rodriguez
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#6e7378" }}>
              Commerce Administrator
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
