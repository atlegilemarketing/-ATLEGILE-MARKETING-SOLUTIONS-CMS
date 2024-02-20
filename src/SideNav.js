// eslint-disable-next-line
import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';

// Define functional component SideNav that takes userData as a prop
export default function SideNav({ userData }) {

  // Get the authentication instance
  const auth = getAuth();

  // Define the file input ref
  const fileInputRef = React.useRef(null);

  // Define state variable for user image
  const [image, setImage] = React.useState(null);

  // Listen for changes in user authentication state
  onAuthStateChanged(auth, (user) => {
    if (user) {

      // Log the user's email if logged in
      console.log("User logged in with ID: ", user.email)

    } else {

      // Log that no user is logged in
      console.log("No user logged in.")
    }
  });

  // Get the navigation function from React Router
  const navigate = useNavigate();

  // Initialize state variables for the active page
  const [activePage, setActivePage] = React.useState("");

  // Function to handle navigation to the Dashboard page
  const handleNavigateToDashboard = () => {
    setActivePage("dashboard");
    navigate("dashboard");
  };

  // Define similar functions for other navigation links
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

  // Function to handle signing out
  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
  };

  // Function to handle file selection for user image
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
  // Function to open the file input for changing the user image
  const openFileInput = () => {
    fileInputRef.current.click();
  };

  // Return the JSX for rendering the sidebar navigation menu
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
         Admin
        </Typography>
        <Typography sx={{ fontWeight: 600, color: "black" }}>
        012346789
        </Typography>
        <Typography sx={{ fontWeight: 600, color: "black" }}>
         atlegile@ams.co.za
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
