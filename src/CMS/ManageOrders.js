import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SearchIcon from "@mui/icons-material/Search";
import { firebase } from "../config";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import clipArt from "../images/clipArtOrders.png";
import OrderCard from "./OrderCard";

// Define the component function ManageOrders
export default function ManageOrders() {
  // Define state variables using the useState hook
  const [ordersList, setOrdersList] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [user] = useAuthState(firebase.auth());
  const [openOrderDetails, setOpenOrderDetails] = useState(false);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define an asynchronous function fetchData
    const fetchData = async () => {
      try {
        // Fetch data from the 'Users' collection in Firestore
        const usersRef = firebase.firestore().collection("Users");
        const usersSnapshot = await usersRef.get();

        // Set the number of users in the state
        setUsersCount(usersSnapshot.size);

        // Fetch data from the 'Orders' collection in Firestore
        const ordersRef = firebase.firestore().collection("Orders");
        const ordersSnapshot = await ordersRef.get();

        // Process the orders data and set it in the state
        const ordersData = ordersSnapshot.docs.map((doc) => ({
          id: doc.id,
          deliveryAddress: doc.data().deliveryAddress,
          deliveryDate: doc.data().deliveryDate,
          deliveryGuy: doc.data().deliveryGuy,
          delivertFee: doc.data().deliveryFee,
          DeliveryStatus: doc.data().DeliveryStatus,
          orderNumber: doc.data().orderNumber,
          orderSummary: doc.data().orderSummary,

          userName: doc.data().userName,
          productId: doc.data().productId,
          createdAt: doc.data().createdAt,
        }));

        setOrdersList(ordersData);

        // Set the number of orders in the state
        setOrdersCount(ordersData.length);

      } catch (error) {
        // Handle any errors that occur during data fetching
        console.error("Error fetching data:", error);
      }
    };

    // Check if a user is authenticated before fetching data
    if (user) {
      fetchData();
    }
  }, [user]); // Run the effect whenever the user authentication status changes

  // Return the JSX for rendering the component
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          overflowY: "auto",
        }}>
        <Box
          sx={{
            height: "20vh",
            backgroundColor: "#072840",
            display: "flex",
          }}>
          <Box
            sx={{
              backgroundImage: `url(${clipArt})`,
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "120% 50%",
              backgroundSize: "50%",
              display: "flex",
              alignItems: "center",
            }}>
            <Typography
              sx={{
                color: "white",
                fontSize: 30,
                fontWeight: 600,
                paddingLeft: 2,
              }}>
              MANAGE ORDERS
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            height: "80vh",
          }}>
          <Box
            sx={{
              ml: 4,
              mt: 4,
              border: "none",
              borderBottom: "1px lightgray solid",
            }}>
            <Typography sx={{ fontWeight: 700 }}>ORDERS</Typography>
          </Box>

          {/* Display counts of sales, new orders, and new users */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              ml: 4,
              mt: 8,
            }}>
            {/* Display sales count */}
            <Box
              sx={{
                width: "100px",
                display: "flex",
                flexDirection: "column",
              }}>
              <Typography sx={{ color: "gray", fontSize: 12 }}>
                Sales
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 20 }}>
                {ordersCount}
              </Typography>
            </Box>

            {/* Display new orders count */}
            <Box
              sx={{
                width: "100px",
                display: "flex",
                flexDirection: "column",
              }}>
              <Typography sx={{ color: "gray", fontSize: 12 }}>
                New Orders
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 20 }}>
                {ordersCount}
              </Typography>
            </Box>

            {/* Display new users count */}
            <Box
              sx={{
                width: "100px",
                display: "flex",
                flexDirection: "column",
              }}>
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
            }}>
            <Typography sx={{ fontWeight: 700 }}>NEW ORDERS</Typography>
          </Box>

          {/* Display grid for new orders */}
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
            }}>
            {/* Grid items for each order attribute */}
            <Grid
              item
              xs={12 / 7}
              sx={{
                pl: 2,
                pr: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                border: "none",
                borderRight: "1px lightgray solid",
              }}>
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Invoice Number
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                }}>
                <UnfoldMoreIcon sx={{ fontSize: 17 }} />
                <SearchIcon sx={{ fontSize: 17 }} />
              </Typography>
            </Grid>

            {/* Repeat similar grid items for other order attributes */}

          </Grid>

          {/* Display loading spinner if orders are being fetched */}
          {ordersList.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "20vh",
              }}>
              <CircularProgress />
            </Box>
          ) : (
            // Display OrderCard component for each order in ordersList
            ordersList.map((order) => (
              <OrderCard
                openOrderDetails={openOrderDetails}
                setOpenOrderDetails={setOpenOrderDetails}
                order={order}
                key={order.id}
              />
            ))
          )}
        </Box>
      </Box>
    </>
  );
}
