import React, { useState } from "react";
import { Grid, Typography, Button, Modal, Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function UserCard({ user }) {
  const [open, setOpen] = useState(false);
  console.log("Industry: ", user.industry);
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
            <Typography sx={{ fontWeight: 700 }}>User Details</Typography>

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
            <Typography>User Name: {user.userName}</Typography>
            <Typography>Reg Number: {user.regNumber}</Typography>
            <Typography>User Type: {user.userType}</Typography>
            <Typography>Industry: {user.industry}</Typography>
          </Box>
        </Box>
      </Modal>

      <Grid
        container
        key={user.id}
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
          <Typography noWrap>{user.name}</Typography>
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
          <Typography noWrap>{user.surname}</Typography>
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
          <Typography noWrap>{user.phone}</Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography noWrap>{user.email}</Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            pl: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography noWrap>{user.location}</Typography>
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
              variant="text"
              sx={{
                textDecoration: "none",
                color: "#1890ff",
                display: "flex",
                alignItems: "center",
                fontSize: 12,
                border: "none",
                borderRight: "1px lightgray solid",
              }}
            >
              {user.actions[0]}
            </Button>

            <Button
              variant="text"
              sx={{
                textDecoration: "none",
                color: "#1890ff",
                display: "flex",
                alignItems: "center",
                fontSize: 12,
              }}
            >
              {user.actions[1]}
            </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default UserCard;
