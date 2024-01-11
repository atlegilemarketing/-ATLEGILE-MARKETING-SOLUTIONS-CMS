import React, { useState } from "react";
import { Grid, Typography, Button, Modal, Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function UserCard({ user, onBlockUser }) {
  const [open, setOpen] = useState(false);

  const blockToggleUser = () => {
    console.log("blockToggleUser called");
    console.log("User ID:", user.id);
    console.log("Blocked:", !user.blocked);
  };

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
            <Typography>Name: {user.name}</Typography>
            <Typography>Surname: {user.surname}</Typography>
            <Typography>Phone: {user.phone}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Location: {user.location}</Typography>
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
          <Typography sx={{ fontSize: 14 }}  noWrap>{user.name}</Typography>
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
          <Typography sx={{ fontSize: 14 }}  noWrap>{user.surname}</Typography>
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
          <Typography sx={{ fontSize: 14 }}  noWrap>{user.phone}</Typography>
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
          <Typography sx={{ fontSize: 14 }}  noWrap>{user.email}</Typography>
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
          <Typography sx={{ fontSize: 14 }}  noWrap>{user.location}</Typography>
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
            onClick={blockToggleUser}
            variant="text"
            sx={{
              textDecoration: "none",
              color: "#1890ff",
              display: "flex",
              alignItems: "center",
              fontSize: 14,
              border: "none",
              borderRight: "1px lightgray solid",
            }}
          >
            {user.blocked ? "Unblock User" : "Block User"}
          </Button>

            <Button
            onClick={()=>setOpen(true)}
              variant="text"
              sx={{
                textDecoration: "none",
                color: "#1890ff",
                display: "flex",
                alignItems: "center",
                fontSize: 14,
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
