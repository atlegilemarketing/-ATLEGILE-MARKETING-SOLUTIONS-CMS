import React from "react";
import { Grid, Typography, Button, Modal, Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function ProductCard({ openProductDetails, setOpenProductDetails, product }) {
  console.log(product)
  return (
    <>
      <Modal
        open={openProductDetails}
        onClose={() => setOpenProductDetails(false)}
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "rgb(0,0,0,0.1)" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ backgroundColor: "white" }}>
          <Box
            sx={{
              bproduct: "none",
              bproductBottom: "1px lightgray solid",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>Product Details</Typography>

            <Button
              onClick={() => setOpenProductDetails(false)}
              variant="text"
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                color: "black",
              }}
            >
              <HighlightOffIcon />
            </Button>
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      <Grid
        container
        key={product.id}
        sx={{
          display: "flex",
          flexDirection: "row",
          bproduct: "none",
          bproductBottom: "1px lightgray solid",
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
            onClick={() => setOpenProductDetails(true)}
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
