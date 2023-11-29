import React, { useState } from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function SideNav() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("");

  const handleNavigateToDashboard = () => {
    setActivePage("dashboard");
    navigate("dashboard");
  };
  const handleNavigateToBusinesses = () => {
    setActivePage("businesses");
    navigate("businesses");
  };
  const handleNavigateToUsers = () => {
    setActivePage("users");
    navigate("users");
  };
  const handleNavigateToOrders = () => {
    setActivePage("orders");
    navigate("orders");
  };

  const handleNavigateToProducts = () => {
    setActivePage("products");
    navigate("products");
  };

  const handleSignOut = () => {};
  return (
    <Box
      sx={{
        width: "318px",
        height: "97vh",
        border: "none",
        borderRight: "1px lightgray solid",
        padding: 2,
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
        <Typography sx={{ fontWeight: 600, color: "black" }}>
          0123456789
        </Typography>
        <Typography sx={{ fontWeight: 600, color: "black" }}>
          example@mail.com
        </Typography>
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
            backgroundColor:"#b8d9f7"
          }}
        >
          <StarIcon sx={{ color: "gray", mr: 4 }} />
          <Typography variant="inherit" sx={{ color: "black" }}>
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
          onClick={handleNavigateToOrders}
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
            Orders
          </Typography>
        </Button>

        <Button
          onClick={handleNavigateToProducts}
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
            Products
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
      <Box sx={{ mt: 2 }}>
        <Button
          onClick={handleSignOut}
          variant="text"
          id="signOut"
          sx={{
            display: "flex",
          }}
        >
          <Typography sx={{ color: "#d32f2f" }}>Sign out</Typography>
        </Button>
      </Box>
    </Box>
  );
}
export default SideNav;
