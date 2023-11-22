import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";


const logo = require("../images/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png");

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  // eslint-disable-next-line
  let validRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validRegex.test(inputEmail));
  };

  const handleSignIn = () => {
    console.log("Email: ", email);
    console.log("Password: ", password);
    alert("Logged in successfully!")
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",

      }}
    >
      <div
        style={{
          height: "100%",
          padding: 20,
        }}
        className="maximumWidth"
        id="signInContainer"
      >
        <div
          style={{
            height: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="cropped AMS Shadow Queen Logo BNY-1320x772" />
        </div>

        <div
          style={{
            height: "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: 30, fontWeight: 600 }}>Sign In</span>
            <span style={{ fontSize: 15, fontWeight: 500 }}>
              Content Management System
            </span>
          </div>

          <div style={{ paddingTop: 20 }}>
            <label htmlFor="email" style={{ fontSize: 12, color: "gray" }}>
              Email
            </label>
            <br />
            <input
              type="text"
              id="email"
              placeholder="Enter email address"
              style={{
                border: "none",
                borderBottom: isEmailValid
                  ? "1px solid black"
                  : "1px solid red",
                paddingTop: 10,
                paddingBottom: 10,
                width: "100%",
                color: isEmailValid ? "black" : "red",
              }}
              value={email}
              onChange={handleEmailChange}
            />
            {!isEmailValid && (
              <div style={{ color: "red", fontSize: 12 }}>
                Invalid email address.
              </div>
            )}
            <br />
            <label htmlFor="password" style={{ fontSize: 12, color: "gray" }}>
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              style={{
                border: "none",
                borderBottom: "1px solid black",
                paddingTop: 10,
                paddingBottom: 10,
                width: "100%",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 25,
              paddingBottom: 25,
            }}
          >
            <a
              href="http://localhost:3000/"
              style={{ fontSize: 15, color: "white", textDecoration: "none" }}
            >
              No Text
            </a>
            <a
              href="http://localhost:3000/"
              style={{
                textDecoration: "none",
                color: "#072840",
                fontWeight: "500",
                fontSize: 15,
              }}
            >
              FORGOT PASSWORD?
            </a>
          </div>

          <div>
            <button
              style={{
                borderRadius: 20,
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#072840",
                fontWeight: "500",
                color: "white",
                width: "100%",
                paddingTop: 15,
                paddingBottom: 15,
                fontSize: 15,
              }}
              onClick={handleSignIn}
            >
              SIGN IN
            </button>
          </div>

          <div
            style={{
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              width: "100%",
              paddingTop: 15,
              paddingBottom: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaGoogle color="#d32f2f" size={20} />
            <a
              className="button google"
              href="http://localhost:3000/"
              style={{
                color: "#d32f2f",
                marginLeft: 5,
                fontSize: 15,
                textDecoration: "none",
                paddingTop: 15,
                paddingBottom: 15,
              }}
            >
              SIGN IN WITH GOOGLE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
