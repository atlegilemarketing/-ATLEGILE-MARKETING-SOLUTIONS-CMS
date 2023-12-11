// eslint-disable-next-line
import React, { useRef } from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { signOut,getAuth, onAuthStateChanged } from 'firebase/auth';

export default function SideNav({ userData }) {
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    
    console.log("User logged in with ID: ",user.email)
    // ...
  } else {
    // User is signed out
    // ...
    console.log("No user logged in.")
  }
});


  const navigate = useNavigate();
  const [activePage, setActivePage] = React.useState("");
  // eslint-disable-next-line
  const [image, setImage] = React.useState(null);
  const fileInputRef = React.useRef(null);

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

  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
  };

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <Box
      sx={{
        width: "318px",
        border: "none",
        borderRight: "1px lightgray solid",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />

      <Avatar
        sx={{
          color: "gray",
          width: 275,
          height: 275,
          mt: 8,
          mb: 4,
          cursor: "pointer",
        }}
        onClick={openFileInput}
      >
        {userData && userData.name ? userData.name[0] : "S"}
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
         James
        </Typography>
        <Typography sx={{ fontWeight: 600, color: "black" }}>
        012346789
        </Typography>
        <Typography sx={{ fontWeight: 600, color: "black" }}>
         example@email.com
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
            backgroundColor:
              activePage === "dashboard" ? "#b8d9f7" : "transparent",
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
            backgroundColor:
              activePage === "users" ? "#b8d9f7" : "transparent",
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
            backgroundColor:
              activePage === "orders" ? "#b8d9f7" : "transparent",
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
            backgroundColor:
              activePage === "products" ? "#b8d9f7" : "transparent",
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
            backgroundColor:
              activePage === "businesses" ? "#b8d9f7" : "transparent",
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