import React, { useState } from "react";
import { Grid, Typography, Button, Modal, Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  console.log(product);
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "rgb(0,0,0,0.1)" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ maxWidth: "500px" }}>
          <Box
            sx={{
              backgroundColor: "#072840",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>Product Details</Typography>

            <Button
              onClick={() => setOpen(false)}
              variant="text"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
            >
              <HighlightOffIcon />
            </Button>
          </Box>

          <Grid container sx={{ backgroundColor: "white", p: 3 }}>
            <Grid item sx={{ fontWeight: 700 }} xs={4}>
              Product Name:
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
              }}
              xs={8}
            >
              {product.name}
            </Grid>
            <Grid sx={{ fontWeight: 700 }} xs={4}>
              Business Name:
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
              }}
              xs={8}
            >
              {product.businessName}
            </Grid>
            <Grid item sx={{ fontWeight: 700 }} xs={4}>
              Description:
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
              }}
              xs={8}
            >
              {product.description}
            </Grid>
            <Grid item sx={{ fontWeight: 700 }} xs={4}>
              Quantity:
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
              }}
              xs={8}
            >
              {product.quantity}
            </Grid>
            <Grid item sx={{ fontWeight: 700 }} xs={4}>
              Sales:
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
              }}
              xs={8}
            >
              {product.sales}
            </Grid>
            <Grid item sx={{ fontWeight: 700 }} xs={4}>
              Category:
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
              }}
              xs={8}
            >
              {product.selectedProductCategory}
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Grid
        container
        key={product.id}
        sx={{
          display: "flex",
          flexDirection: "row",
          border: "none",
          borderBottom: "1px lightgray solid",
          ml: 2,
          mt: 2,
        }}
      >
        <Grid
          item
          xs={2}
          sx={{
            pl: 2,
            pr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} noWrap>
            {product.productName}
          </Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 2,
            pr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} noWrap>
            {product.businessName}
          </Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 2,
            pr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} noWrap>
            {product.price}
          </Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 2,
            pr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} noWrap>
            {product.quantity}
          </Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 2,
            pr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} noWrap>
            {product.selectedProductCategory}
          </Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 1,
            pr: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => setOpen(true)}
            variant="text"
            sx={{ textDecoration: "none", color: "#1890ff", fontSize: 14 }}
          >
            View Details
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductCard;
