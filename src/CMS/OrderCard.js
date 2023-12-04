import React, { useState } from "react";
import { Grid, Typography, Button, Modal, Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function OrderCard({ order }) {
  const [open, setOpen] = useState(false);
  //console.log("Orders purchaseDate object: ", order.purchaseDate);
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
        <Box sx={{ backgroundColor: "white" }}>
          <Box
            sx={{
              border: "none",
              borderBottom: "1px lightgray solid",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: 700 }}></Typography>

            <Button
              onClick={() => setOpen(false)}
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
        </Box>
      </Modal>

      <Grid
        container
        key={order.id}
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
          xs={12 / 7}
          sx={{
            pl: 2,
            pr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} noWrap>
            {order.orderNumber}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12 / 7}
          sx={{
            pl: 2,
            pr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} noWrap>
            {order.userName}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12 / 7}
          sx={{
            pl: 2,
            pr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} noWrap>
            {new Date(order.purchaseDate.seconds * 1000 + Math.floor(order.purchaseDate.nanoseconds / 1e6)).toLocaleString()}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12 / 7}
          sx={{
            pl: 2,
            pr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} noWrap>
            {order.total}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12 / 7}
          sx={{
            pl: 2,
            pr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} noWrap>
            {order.deliveryStatus}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12 / 7}
          sx={{
            pl: 2,
            pr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} noWrap>
            {order.deliveryAddress}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12 / 7}
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

export default OrderCard;
