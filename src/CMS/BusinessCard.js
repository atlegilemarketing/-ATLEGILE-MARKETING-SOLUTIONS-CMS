import React, { useState } from "react";
import { Grid, Typography, Button, Modal, Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function BusinessCard({
  business,
}) {
  const [open, setOpen] = useState(false);
  console.log("Industry: ",business.industry)
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
        <Box>
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
            <Typography sx={{ fontWeight: 700 }}>Business Details</Typography>

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
          <Box sx={{ backgroundColor: "white",p:3 }}>
            <Typography>Business Name: {business.businessName}</Typography>
            <Typography>Reg Number: {business.regNumber}</Typography>
            <Typography>Business Type: {business.businessType}</Typography>
            <Typography>Industry: {business.industry}</Typography>
          </Box>
        </Box>
      </Modal>

      <Grid
        container
        key={business.id}
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
          xs={12 / 5}
          sx={{
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{business.businessName}</Typography>
        </Grid>

        <Grid
          item
          xs={12 / 5}
          sx={{
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{business.regNumber}</Typography>
        </Grid>

        <Grid
          item
          xs={12 / 5}
          sx={{
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{business.businessType}</Typography>
        </Grid>

        <Grid
          item
          xs={12 / 5}
          sx={{
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{business.industry}</Typography>
        </Grid>

        <Grid
          item
          xs={12 / 5}
          sx={{
            pl: 1,
            pr: 1,
          }}
        >
          <Button
            onClick={() => setOpen(true)}
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

export default BusinessCard;
