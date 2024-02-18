import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Typography,
  Button,
  Modal,
  Container,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { firebase, firestore } from "../config";
import CircularProgress from "@mui/material/CircularProgress";
import AlertDialog from "./AlertDialog";
import SideNav from "../SideNav";
// Importing logo image

const logo = require("../images/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png");
// SignIn component for user authentication

export default function SignIn() {
  const navigate = useNavigate();
  // State variables for user email, password, email validity, and alert modal
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [openAlert, setOpenAlert] = useState(false);
  // State variables for alert title, message, and loading modal

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  // Regular expression for validating email format

  let validRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  // State variable to store user data after successful sign-in

  const [userData, setUserData] = useState(null);
  // Function to handle changes in the email input field

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validRegex.test(inputEmail));
  };
  // Function to handle user sign-in

  const handleSignIn = () => {
    // Check if the email ends with "@ams.com"
    if (!email.toLowerCase().endsWith("@ams.co.za")) {
      setTitle("Invalid Email");
      setMessage("Please use an email address ending with @ams.co.za");
      setOpenAlert(true);
      return;
    }

    setOpen(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userRef = firestore.collection("Users").doc(user.uid);
        userRef.get().then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            setUserData(userData);
          }

          setTitle("Successful");
          setMessage("You have been logged in successfully!");
          setOpenAlert(true);
          navigate("/main/dashboard");
        });
      })
      .catch((error) => {
        // Display error message if sign-in fails

        setTitle("Error: " + error.code);
        setMessage(error.message);
        setOpenAlert(true);
        console.error("Error signing in:", error.code, error.message);
        setOpen(false);
      });
  };
  // Render the SignIn component

  return (
    <>
      <AlertDialog
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        title={title}
        message={message}
      />
      {/* Loading modal displayed during sign-in process */}

      <Modal
        open={open}
        onClose={() => setOpen(true)}
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
        <CircularProgress />
      </Modal>
      {/* Main content container */}

      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        {/* Logo display */}

        <Box
          sx={{
            height: "45vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <img src={logo} alt="cropped AMS Shadow Queen Logo BNY-1320x772" />
        </Box>
        {/* Sign-in form */}

        <Box
          sx={{
            width: "100%",
            height: "45vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: 40, fontWeight: 700 }}>
              Sign In
            </Typography>
            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
              Content Management System
            </Typography>
          </Box>
          {/* Email and password input fields */}

          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              id="email"
              label="email"
              variant="standard"
              value={email}
              onChange={handleEmailChange}
              sx={{ mb: 1 }}
            />
            {!isEmailValid && (
              <Box sx={{ color: "red", fontSize: 12 }}>
                Invalid email address.
              </Box>
            )}
            <br />
            <TextField
              fullWidth
              id="password"
              label="password"
              variant="standard"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          {/* Forgot password link */}

          <Box
            sx={{
              pt: 3,
              pb: 3,
            }}
          >
            <Button
              onClick={() => navigate("/main/dashboard")}
              variant="text"
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ fontWeight: "600", fontSize: 12, color: "#072840" }}
              >
                FORGOT PASSWORD?
              </Typography>
            </Button>
          </Box>
          {/* Sign-in button */}

          <Box>
            <Button
              fullWidth
              sx={{
                textDecoration: "none",
                border: "none",
                backgroundColor: "#072840",
                fontWeight: "500",
                color: "white",
                width: "100%",
                borderRadius: 20,
                fontSize: 15,
                p: 1,
              }}
              onClick={handleSignIn}
              variant="filled"
            >
              SIGN IN
            </Button>
          </Box>
          {/* Sign in with Google button */}

          <Box
            sx={{
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              width: "100%",
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d32f2f",
            }}
          >
            <GoogleIcon color="#d32f2f" size={20} />
            <Typography sx={{ ml: 1, fontSize: 13, fontWeight: 600 }}>
              SIGN IN WITH GOOGLE
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Display SideNav component after successful sign-in */}

      {userData && <SideNav userData={userData} />}
    </>
  );
}
