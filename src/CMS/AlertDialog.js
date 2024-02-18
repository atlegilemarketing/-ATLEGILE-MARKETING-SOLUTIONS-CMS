import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Define the AlertDialog component that displays an alert dialog

export default function AlertDialog({
  openAlert,
  setOpenAlert,
  title,
  message,
}) {
  // Define a function to handle the closing of the alert dialog

  const handleClose = () => {
    setOpenAlert(false);
  };

  console.log(title, " ", message);

  return (
    <React.Fragment>
      {/* Render the Dialog component from Material-UI */}

      <Dialog
        open={openAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* Render the title of the dialog */}

        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {/* Render the content of the dialog */}

          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        {/* Render the actions (buttons) of the dialog */}

        <DialogActions>
          {/* Render the "Ok" button */}

          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
