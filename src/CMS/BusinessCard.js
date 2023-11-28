import React from "react";
import { Grid, Typography, Button, Modal } from "@mui/material";
import { Container } from "@mui/system";

function BusinessCard({
  openBusinessDetails,
  setOpenBusinessDetails,
  business,
}) {
  return (
    <>
      <Modal
        open={openBusinessDetails}
        onClose={() => setOpenBusinessDetails(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(2px) contrast(80%)",
        }}
        hideBackdrop
      >
        <Container sx={{backgroundColor:"white"}}>

        </Container>
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
          item xs={12/5}
          sx={{
            width: "20%",
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{business.businessName}</Typography>
        </Grid>

        <Grid
          item xs={12/5}
          sx={{
            width: "20%",
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{business.regNumber}</Typography>
        </Grid>

        <Grid
          item xs={12/5}
          sx={{
            width: "20%",
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{business.businessType}</Typography>
        </Grid>

        <Grid
          item xs={12/5}
          sx={{
            width: "20%",
            pl: 2,
            pr: 2,
          }}
        >
          <Typography>{business.industry}</Typography>
        </Grid>

        <Grid
          item xs={12/5}
          sx={{
            width: "20%",
            pl: 1,
            pr: 1,
          }}
        >
          <Button
            onClick={() => setOpenBusinessDetails(true)}
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
