import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SearchIcon from "@mui/icons-material/Search";
import { firebase } from "../config";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import clipArt from "../images/clipArtProducts.png";
import ProductCard from "./ProductCard";
import CircularProgress from "@mui/material/CircularProgress";

export default function ManageProducts() {
  const [productsList, setProductsList] = useState([]);
  const [productsCount, setProductsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [user] = useAuthState(firebase.auth());
  const [openProductDetails, setOpenProductDetails] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRef = firebase.firestore().collection("Products");
        const snapshot = await productsRef.get();
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          businessName: doc.data().businessName,
          description: doc.data().description,
          image: doc.data().image,
          price: doc.data().price,
          productName: doc.data().productName,
          quantity: doc.data().quantity,
          sales: doc.data().sales,
          selectedProductCategory: doc.data().selectedProductCategory,
        }));
        setProductsList(productsData);
        setProductsCount(snapshot.size);
      } catch (error) {
        console.error("Error fetching products:", error);
      }

      try {
        const usersRef = firebase.firestore().collection("Users");
        const usersSnapshot = await usersRef.get();
        const usersData = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          usersName: doc.data().usersName,
        }));
        setUsersCount(usersSnapshot.size);
      } catch (error) {
        console.error("Error fetching users:", error);
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
            height: "20%",
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
              MANAGE PRODUCTS
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            height: "80%",
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
                New Products
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 20 }}>
              {productsCount}
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
       
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Product Name
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

              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Business
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

              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Price
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

              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Quantity
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
                bproduct: "none",
                bproductRight: "1px lightgray solid",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Category
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
                height: "20%",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            productsList.map((product) => (
              <ProductCard
                openProductDetails={openProductDetails}
                setOpenProductDetails={setOpenProductDetails}
                product={product}
                key={product.id}
              />
            ))
          )}
        </Box>
      </Box>
    </>
  );
}
