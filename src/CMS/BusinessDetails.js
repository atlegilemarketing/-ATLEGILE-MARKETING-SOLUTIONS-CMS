import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Define the BusinessDetails component that displays business details in a dialog

export default function BusinessDetails({
  openBusinessDetails,
  setOpenBusinessDetails,
  business,
}) {
  const handleClose = () => {
    setOpenBusinessDetails(false);
  };

  return (
    <React.Fragment>
            {/* Dialog to display business details */}

      <Dialog
        open={openBusinessDetails}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Business Details</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {business}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
