import { Box, Typography, Grid, Button, IconButton } from "@mui/material";
import React from "react";
import Card from "../components/Card";
import { SlArrowDown } from "react-icons/sl";
import { LuClock } from "react-icons/lu";
import { RiFilter2Line } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import CardBig from "../components/CardBig";
import { TbClockPlay } from "react-icons/tb";
import { SlArrowRight } from "react-icons/sl";
import CardAct from "../components/CardAct";
import Table from "..//pages/Table";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InventoryIcon from "@mui/icons-material/Inventory";
import { CgMenu } from "react-icons/cg";
import { CgMenuGridR } from "react-icons/cg";
import { FaBoxOpen, FaTags, FaExclamationCircle } from "react-icons/fa"; 

const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            Commerce Dashboard
          </Typography>
          <Typography sx={{ color: "#938b80", fontSize: "12px" }}>
            Welcome back, Emma. Here's what's happening with your commerce
            operations today.
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", gap: "10px", justifyContent: "space-between" }}
        >
          <Button
            variant="outlined"
            disableElevation
            disableRipple
            sx={{
              gap: "10px",
              color: "black",
              borderColor: "#d5d4d4ff",
              fontWeight: "bold",
              width: "120px",
              backgroundColor: "transparent",
              boxShadow: "none",
              textTransform: "none",
              transition: "box-shadow 0.3s ease",
              "&:focus-within": {
                boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
              },
            }}
          >
            <RiFilter2Line />
            Fliter
            <SlArrowDown />
          </Button>

          <div
            style={{
              display: "flex",
              border: "1px solid #d5d4d4ff",
              borderRadius: "4px",
              overflow: "hidden",
              padding: "2px",
            }}
          >
            <Button
              variant="outlined"
              disableElevation
              disableRipple
              sx={{
                gap: "5px",
                padding: "4px",
                minWidth: "24px",
                color: "black",
                borderColor: "transparent",
                fontWeight: "bold",
                backgroundColor: "transparent",
                boxShadow: "none",
                textTransform: "none",
                transition: "box-shadow 0.3s ease",
                "&:focus-within": {
                  boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
                },
              }}
            >
              <CgMenuGridR size={16} />
            </Button>

            <div
              style={{
                borderLeft: "1px solid #d5d4d4ff",
                height: "32px",
                margin: "auto 0",
              }}
            />

            <Button
              variant="outlined"
              disableElevation
              disableRipple
              sx={{
                gap: "5px",
                padding: "4px",
                minWidth: "24px",
                color: "black",
                borderColor: "transparent",
                fontWeight: "bold",
                backgroundColor: "transparent",
              
                boxShadow: "none",
                textTransform: "none",
                transition: "box-shadow 0.3s ease",
                "&:focus-within": {
                  boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
                },
              }}
            >
              <CgMenu size={16} />
            </Button>
          </div>

          <Button
            variant="contained"
            disableElevation
            disableRipple
            sx={{
              gap: "10px",
              backgroundColor: "transparent",
              boxShadow: "none",
              textTransform: "none",
              color: "white",
              bgcolor: "blue",
              transition: "box-shadow 0.3s ease",
              "&:focus-within": {
                boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
              },
            }}
          >
            <LuClock />
            Last 30 Days <SlArrowDown />
          </Button>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item>
          <Card
            title="Total Revenue"
            value="$1,842,356"
            change="+12.5% vs last period"
            icon={
              <Box
                sx={{
                  width: "200px",
                  height: "50px",
                  padding: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#e3f2fd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "blue",
                }}
              >
                <AttachMoneyIcon />
              </Box>
            }
          />
        </Grid>

        <Grid item>
          <Card
            title="Orders"
            value="24,853"
            change="+8.2% vs last period"
            icon={
              <Box
                sx={{
                  width: "200px",
                  height: "50px",
                  padding: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#e3f2fd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "blue",
                }}
              >
                <ShoppingCartIcon />
              </Box>
            }
          />
        </Grid>

        <Grid item>
          <Card
            title="Average Order Value"
            value="$74.13"
            change="+3.8% vs last period"
            icon={
              <Box
                sx={{
                  width: "200px",
                  height: "50px",
                  padding: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#e3f2fd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "green",
                }}
              >
                <TrendingUpIcon />
              </Box>
            }
          />
        </Grid>

        <Grid item>
          <Card
            title="Out of Stock Items"
            value="147"
            change="-4.3% vs last period"
            icon={
              <Box
                sx={{
                  width: "200px",
                  height: "50px",
                  padding: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#e3f2fd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "orange",
                }}
              >
                <InventoryIcon />
              </Box>
            }
          />
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", gap: "5px", justifyContent: "space-between" }}
      >
        <CardBig
          title="Revenue Trends"
          value="View Details"
          icon={
            <Box>
              <FaChartLine fontSize="150px" color="#d2d4dc" />
            </Box>
          }
        />
        <CardBig
          title="Sales by Category"
          value="View Details"
          icon={
            <Box>
              <TbClockPlay fontSize="150px" color="#d2d4dc" />
            </Box>
          }
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: "medium" }}>Agent Activity</Typography>
        <Typography
          sx={{
            fontSize: "12px",
            alignItems: "center",
            display: "flex",
            gap: "5px",
          }}
          color="primary"
        >
          View All Agents
          <SlArrowRight />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <CardAct
          title="Inventory Agent"
          value="Optimal"
          bgcolor="green"
          title1="Tasks Completed"
          value1="1,284"
          title2="Efficiency"
          value2="94%"
          icon={<FaBoxOpen />}
        />
        <CardAct
          title="Pricing Agent"
          value="Active"
          bgcolor="blue"
          title1="Price Updates"
          value1="523"
          title2="Conversion Impact"
          value2="+8.7%"
          icon={<FaTags />}
        />
        <CardAct
          title="Fraud Detection Agent"
          value="Alert"
          bgcolor="orange"
          title1="Cases Flagged"
          value1="32"
          title2="False Positives"
          value2="3%"
          icon={<FaExclamationCircle />}
        />
      </Box>
      <Box>
        <Table />
      </Box>
    </Box>
  );
};

export default Main;
