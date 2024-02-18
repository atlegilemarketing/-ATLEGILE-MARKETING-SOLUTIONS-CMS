import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import { firebase } from "../config";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import UserCard from "./UserCard";

import clipArt from "../images/clipArtUsers.png";

export default function ManageUsers() {
  const [usersInfo, setUsersInfo] = useState([]);
  const [businessesCount, setBusinessesCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [user] = useAuthState(firebase.auth());
  const [searchInput, setSearchInput] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  // Fetches user data from Firestore

  const fetchData = useCallback(async () => {
    try {
      // Fetch user data

      const usersRef = firebase.firestore().collection("Users");
      const usersSnapshot = await usersRef.get();
      // Map user data to usable format

      const usersData = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        surname: doc.data().surname,
        email: doc.data().email,
        phone: doc.data().phone,
        location: doc.data().location,
        actions: ["Block User", "View Details"],
      }));
      setUsersInfo(usersData);
      // Fetch businesses count

      const businessesRef = firebase.firestore().collection("Business");
      const businessesSnapshot = await businessesRef.get();
      setBusinessesCount(businessesSnapshot.size);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    try {
      // Fetch orders count

      const ordersRef = firebase.firestore().collection("Orders");
      const ordersSnapshot = await ordersRef.get();
      setOrdersCount(ordersSnapshot.size);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }, []);
  // Handles changes in the search input field

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  // Handles click on the search icon

  const handleSearchIconClick = () => {
    setIsSearchActive(true);
  };
  // Handles blur event on the search input field

  const handleSearchInputBlur = () => {
    setIsSearchActive(false);
  };

  // Fetch data when user is authenticated or search input changes
  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user, searchInput, fetchData]);

  // Blocks or unblocks a user
  const blockUser = async (userId, blocked) => {
    try {
      await firebase.firestore().collection("Users").doc(userId).update({
        blocked: blocked,
      });

      fetchData();

      if (blocked) {
        window.alert("User blocked successfully!");
      }
    } catch (error) {
      console.error("Error blocking/unblocking user:", error);
    }
  };

  // Render the component
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          height: "20vh",
          backgroundColor: "#072840",
          display: "flex",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${clipArt})`,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "120% 50%",
            backgroundSize: "50%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: 30,
              fontWeight: 600,
              paddingLeft: 2,
            }}
          >
            MANAGE USERS
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: "80vh",
        }}
      >
        <Box
          sx={{
            ml: 4,
            mt: 4,
            border: "none",
            borderBottom: "1px lightgray solid",
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>USERS</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            ml: 4,
            mt: 8,
          }}
        >
          <Box
            sx={{
              width: "100px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "gray", fontSize: 12 }}>Sales</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 20 }}>
              {ordersCount}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "gray", fontSize: 12 }}>
              New Users
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 20 }}>
              {usersInfo.length}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "gray", fontSize: 12 }}>
              New Businesses
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 20 }}>
              {businessesCount}
            </Typography>
          </Box>
        </Box>
        {/* Search and sorting options */}

        <Box
          sx={{
            border: "none",
            borderBottom: "1px lightgray solid",
            ml: 4,
            mt: 4,
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>NEW USERS</Typography>
        </Box>

        {/* Grid for displaying user information */}
        <Grid
          container
          sx={{
            backgroundColor: "#fafafa",
            display: "flex",
            flexDirection: "row",
            ml: 2,
            mt: 2,
            pt: 2,
            pb: 2,
            border: "none",
            borderBottom: "1px lightgray solid",
          }}
        >
          <Grid
            item
            xs={2}
            sx={{
              pl: 2,
              pr: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              border: "none",
              borderRight: "1px lightgray solid",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>Name</Typography>
            <Typography
              sx={{
                color: "gray",
              }}
            >
              <UnfoldMoreIcon sx={{ fontSize: 17 }} />
            </Typography>
            {isSearchActive ? (
              <TextField
                label="Search users"
                value={searchInput}
                onChange={handleSearchInputChange}
                onBlur={handleSearchInputBlur}
                sx={{
                  ml: 2,
                  mt: 2,
                  mb: 2,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={{ fontSize: 17, cursor: "pointer" }}
                        onClick={handleSearchIconClick}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            ) : (
              <SearchIcon
                sx={{ fontSize: 17, cursor: "pointer" }}
                onClick={handleSearchIconClick}
              />
            )}
          </Grid>

          <Grid
            item
            xs={2}
            sx={{
              pl: 2,
              pr: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              border: "none",
              borderRight: "1px lightgray solid",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              Surname
            </Typography>
            <Typography
              sx={{
                color: "gray",
              }}
            >
              <UnfoldMoreIcon sx={{ fontSize: 17 }} />
            </Typography>
          </Grid>

          <Grid
            item
            xs={2}
            sx={{
              pl: 2,
              pr: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              border: "none",
              borderRight: "1px lightgray solid",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              Phone
            </Typography>
            <Typography
              sx={{
                color: "gray",
              }}
            >
              <UnfoldMoreIcon sx={{ fontSize: 17 }} />
            </Typography>
          </Grid>

          <Grid
            item
            xs={2}
            sx={{
              pl: 2,
              pr: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              border: "none",
              borderRight: "1px lightgray solid",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              Email
            </Typography>
            <Typography
              sx={{
                color: "gray",
              }}
            >
              <UnfoldMoreIcon sx={{ fontSize: 17 }} />
            </Typography>
          </Grid>

          <Grid
            item
            xs={2}
            sx={{
              pl: 2,
              pr: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              border: "none",
              borderRight: "1px lightgray solid",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              Location
            </Typography>
            <Typography
              sx={{
                color: "gray",
              }}
            >
              <UnfoldMoreIcon sx={{ fontSize: 17 }} />
            </Typography>
          </Grid>

          <Grid
            item
            xs={2}
            sx={{
              pl: 2,
              pr: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              Actions
            </Typography>
          </Grid>
        </Grid>

        {/* Display user cards */}
        {usersInfo.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "20vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          usersInfo.map((user) => (
            <UserCard key={user.id} user={user} onBlockUser={blockUser} />
          ))
        )}
      </Box>
    </Box>
  );
}
