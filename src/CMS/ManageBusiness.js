import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SearchIcon from "@mui/icons-material/Search";
import { firebase } from "../config";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import clipArt from "../images/clipArtBusinesses.png";
import BusinessCard from "./BusinessCard";
import CircularProgress from "@mui/material/CircularProgress";

export default function ManageBusinesses() {
    // State variabl

  const [businessesList, setBusinessesList] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [businessesCount, setBusinessesCount] = useState(0);
  const [user] = useAuthState(firebase.auth());
// eslint-disable-next-line
  const [prevBusinessesCount, setPrevBusinessesCount] = useState(0);
    // Fetch data from Firebase on component mount or when the user changes

  useEffect(() => {
    const fetchData = async () => {
      try {
                // Fetch businesses data

        const businessesRef = firebase.firestore().collection("Business");
        const snapshot = await businessesRef.get();
        const businessesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          businessName: doc.data().businessName,
          regNumber: doc.data().regNumber,
          businessType: doc.data().selectedBusinessType,
          industry: doc.data().selectedIndustry,
        }));
        setBusinessesList(businessesData);
        setPrevBusinessesCount(businessesCount);
        setBusinessesCount(snapshot.size);
          // Fetch users data

        const usersRef = firebase.firestore().collection("Users");
        const usersSnapshot = await usersRef.get();
        setUsersCount(usersSnapshot.size);
          // Fetch orders data

        const ordersRef = firebase.firestore().collection("Orders");
        const ordersSnapshot = await ordersRef.get();
        setOrdersCount(ordersSnapshot.size);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    if (user) {
      fetchData();
    }
  }, [user, businessesCount]);
  

  return (
    <>
            {/* Main container */}

      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          overflowY: "auto",
        }}
      >
                {/* Header */}

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
              MANAGE BUSINESSES
            </Typography>
          </Box>
        </Box>
        {/* Main content */}

        <Box
          sx={{
            height: "80vh",
          }}
        >
                    {/* Section: Business counts */}

          <Box
            sx={{
              ml: 4,
              mt: 4,
              border: "none",
              borderBottom: "1px lightgray solid",
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>BUSINESSES</Typography>
          </Box>
          {/* Display counts of sales, new businesses, and new users */}

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
              <Typography sx={{ color: "gray", fontSize: 12 }}>
                Sales
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 20 }}>
              {ordersCount}
              </Typography>
            </Box>
          {/* Section: New businesses */}

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
              {usersCount}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              border: "none",
              borderBottom: "1px lightgray solid",
              ml: 4,
              mt: 4,
            }}
          >
            <Typography sx={{ fontWeight: 700 }}> NEW BUSINESSES</Typography>
          </Box>
          {/* Grid to display new businesses with columns for name, reg number, business type, industry, and actions */}

          <Grid
            container
            sx={{
              backgroundColor: "#FAFAFA",
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
                        {/* Column headers */}

            <Grid
              item
              xs={12 / 5}
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
              <Typography sx={{ fontWeight: 550, fontSize: 14 }}>Business Name</Typography>
              <Typography
                sx={{
                  color: "gray",
                }}
              >
                <UnfoldMoreIcon sx={{fontSize:17}}/>
                <SearchIcon sx={{fontSize:17}}/>
              </Typography>
            </Grid>

            <Grid
              item
              xs={12 / 5}
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
              <Typography sx={{ fontWeight: 550, fontSize: 14 }}>Reg Number</Typography>
              <Typography
                sx={{
                  color: "gray",
                }}
              >
                <UnfoldMoreIcon sx={{fontSize:17}}/>
              </Typography>
            </Grid>

            <Grid
              item
              xs={12 / 5}
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
              <Typography sx={{ fontWeight: 550, fontSize: 14 }}>Type of Business</Typography>
              <Typography
                sx={{
                  color: "gray",
                }}
              >
                <UnfoldMoreIcon sx={{fontSize:17}}/>
              </Typography>
            </Grid>

            <Grid
              item
              xs={12 / 5}
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
              <Typography sx={{ fontWeight: 550, fontSize: 14 }}>Industry</Typography>
              <Typography
                sx={{
                  color: "gray",
                }}
              >
                <UnfoldMoreIcon sx={{fontSize:17}}/>
              </Typography>
            </Grid>
            {/* Actions column */}

            <Grid
              item
              xs={12 / 5}
              sx={{
                pl: 2,
                pr: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: 550, fontSize: 14 }}>Actions</Typography>
            </Grid>
          </Grid>
          {/* Display a loading indicator or the list of businesses */}

          {businessesList.length === 0 ? (
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
            businessesList.map((business) => (
              <BusinessCard key={business.id}
                business={business}
              />
            ))
          )}
        </Box>
      </Box>
    </>
  );
}
