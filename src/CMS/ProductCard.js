import React from "react";
import { Grid, Typography, Button, Modal, Box } from "@mui/material";


function ProductCard({ openProductDetails, setOpenProductDetails, product }) {
  return (
    <>
      <Modal
        open={openProductDetails}
        onClose={() => setOpenProductDetails(false)}
        sx={{ "& .MuiBackdrop-root": { backgroundColor: "transparent" } }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{}}>
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
          }}
        >
          <Typography>{product.productName}</Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{product.regNumber}</Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{product.productType}</Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{product.industry}</Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{product.industry}</Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 1,
            pr: 1,
          }}
        >
          <Button
            onClick={() => setOpenProductDetails(true)}
            variant="text"
            sx={{ textDecoration: "none", color: "#1890ff" }}
          >
            View Details
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductCard;
