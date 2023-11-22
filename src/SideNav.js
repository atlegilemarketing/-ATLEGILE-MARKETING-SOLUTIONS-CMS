import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function SideNav() {
  const navigate = useNavigate();
  const handleNavigateToDashboard = () => {
    navigate("dashboard");
  };
  const handleNavigateToBusinesses = () => {
    navigate("businesses");
  };
  const handleNavigateToUsers = () => {
    navigate("users");
  };
  return (
    <Box
      sx={{
        width: "318px",
        height: "97vh",
        border: "none",
        borderRight: "1px lightgray solid",
        padding: 2
,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          color: "gray",
          width: 275,
          height: 275,
          mt: 8,
          mb: 4,
        }}
      >
        S
      </Avatar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, color: "black" }}>
          Sarah
        </Typography>
        <Typography sx={{ fontWeight: 600, color: "black" }}>0123456789</Typography>
        <Typography sx={{ fontWeight: 600, color: "black" }}>example@mail.com</Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button
          onClick={handleNavigateToDashboard}
          variant="text"
          fullWidth
          sx={{
            borderBottom: "1px lightgray solid",
            justifyContent: "flex-start",
            textTransform: "none",
          }}
        >
          <StarIcon sx={{ color: "gray", mr: 4 }} />
          <Typography variant="inherit" sx={{color: "black" }}>
            Dashboard
          </Typography>
        </Button>
        <Button
          onClick={handleNavigateToUsers}
          variant="text"
          fullWidth
          id="users-link"
          sx={{
            borderBottom: "1px lightgray solid",
            justifyContent: "flex-start",
            textTransform: "none",
          }}
        >
          <StarIcon sx={{ color: "gray", mr: 4 }} />
          <Typography variant="inherit" sx={{ color: "black" }}>
            Users
          </Typography>
        </Button>
        <Button
          onClick={handleNavigateToBusinesses}
          variant="text"
          fullWidth
          id="businesses-link"
          sx={{
            borderBottom: "1px lightgray solid",
            justifyContent: "flex-start",
            textTransform: "none",
          }}
        >
          <StarIcon sx={{ color: "gray", mr: 4 }} />
          <Typography variant="inherit" sx={{ color: "black" }}>
            Businesses
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
export default SideNav;