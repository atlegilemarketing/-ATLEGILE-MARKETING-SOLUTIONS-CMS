import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SearchIcon from "@mui/icons-material/Search";
import { firebase } from "../config";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import clipArt from "../images/clipArtOrders.png";
import OrderCard from "./OrderCard";
import CircularProgress from "@mui/material/CircularProgress";

export default function ManageOrders() {
  const [productsList, setOrdersList] = useState([]);
  const [user] = useAuthState(firebase.auth());
  const [openOrderDetails, setOpenOrderDetails] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRef = firebase.firestore().collection("Orders");
        const snapshot = await productsRef.get();
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          businessName: doc.data().businessName,
          regNumber: doc.data().regNumber,
          businessType: doc.data().businessType,
          industry: doc.data().industry,
        }));
        setOrdersList(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <>
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
              MANAGE ORDERS
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
              <Typography sx={{ color: "gray", fontSize: 12 }}>
                Sales
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 20 }}>
                300
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
                New Orders
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 20 }}>
                300
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
                300
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
            <Typography sx={{ fontWeight: 700 }}>NEW PRODUCTS</Typography>
          </Box>

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
                Invoice
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                }}
              >
                <UnfoldMoreIcon sx={{ fontSize: 17 }} />
                <SearchIcon sx={{ fontSize: 17 }} />
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
                Date
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
                Order Name
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
                Company
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
                Total
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

          {productsList.length === 0 ? (
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
            productsList.map((product) => (
              <OrderCard
                openOrderDetails={openOrderDetails}
                setOpenOrderDetails={setOpenOrderDetails}
                product={product}
              />
            ))
          )}
        </Box>
      </Box>
    </>
  );
}
