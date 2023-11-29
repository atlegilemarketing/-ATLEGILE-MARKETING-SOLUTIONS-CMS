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
                justifyContent: "flex-end",
                alignItems: "flex-end",
                color: "white",
              }}
            >
              <HighlightOffIcon />
            </Button>
          </Box>
          <Box sx={{ backgroundColor: "white", p: 3 }}>
            <Typography
              sx={{
                display: "flex",
                //justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{fontWeight:700}}>Product Name:</Typography>{" "}
              {product.productName}
            </Typography>

            <Typography
              sx={{
                display: "flex",
                //justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{fontWeight:700}}>Business Name:</Typography>{" "}
              {product.businessName}
            </Typography>

            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography sx={{fontWeight:700}}>Description:</Typography>{" "}
              {product.description}
            </Typography>

            <Typography
              sx={{
                display: "flex",
                //justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{fontWeight:700}}>Description:</Typography>{" "}
              {product.description}
            </Typography>
            <Typography> {product.description}</Typography>
            <Typography>Quantity: {product.quantity}</Typography>
            <Typography>Sales: {product.sales}</Typography>
            <Typography>Category: {product.selectedProductCategory}</Typography>
          </Box>
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
