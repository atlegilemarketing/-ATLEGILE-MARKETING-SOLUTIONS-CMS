import React from "react";
// import { useState } from "react";
import { Typography, Link } from "@mui/material";
import "../App.css";

function ManageUsers() {

  // Function to handle blocking a user
  const handleBlockUser = (userId) => {
    // Implement logic to block the user (e.g., update state, send API request, etc.)
    console.log(`Block user with ID ${userId}`);
  };

  // Function to handle viewing user details
  const handleViewDetails = (userId) => {
    // Implement logic to view user details (e.g., navigate to a details page)
    console.log(`View details for user with ID ${userId}`);
  };

  return (
    <div className="mainContainer">
      <div className="ribbonContaier"></div>
      <div className="dashboardContainer">
        <Typography variant="h2">Dashboard</Typography>
        <div className="statsContainer">
          <div style={{ display: "flex", flexDirection: "column", width: 122 }}>
            <Typography variant="body1">Sales</Typography>
            <Typography variant="h4" className="statsNumber">
              300
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 122 }}>
            <Typography variant="body1">New Businesses</Typography>
            <Typography variant="h4" className="statsNumber">
              300
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 122 }}>
            <Typography variant="body1">New Users</Typography>
            <Typography variant="h4" className="statsNumber">
              300
            </Typography>
          </div>
        </div>
        <div className="tableContainer">
          <div className="tableBoxContainer" style={{ marginRight: 8 }}>
            <Typography variant="h2">New Users</Typography>
            <div
              style={{ width: "190%", height: 500, backgroundColor: "white" }}
            >
              <table style={{ width: "100%" }}>
                <thead>
                  <tr style={{ backgroundColor: "#FAFAFA" }}>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td className="tableCell">
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                    <td>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link
                          component={Link}
                          to="#block"
                          style={{
                            color: "#2196F3",
                            textDecoration: "none",
                            borderRight: "1px solid grey",
                            padding: "0 8px",
                          }}
                        >
                          Block Users
                        </Link>
                        <Link
                          component={Link}
                          to="#view"
                          style={{ color: "#2196F3", textDecoration: "none", padding: "0 8px" }}
                        >
                          View Details
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td className="tableCell">
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                    <td>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link
                          component={Link}
                          to="#block"
                          style={{
                            color: "#2196F3",
                            textDecoration: "none",
                            borderRight: "1px solid grey",
                            padding: "0 8px",
                          }}
                        >
                          Block Users
                        </Link>
                        <Link
                          component={Link}
                          to="#view"
                          style={{ color: "#2196F3", textDecoration: "none", padding: "0 8px" }}
                        >
                          View Details
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td className="tableCell">
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                    <td>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link
                          component={Link}
                          to="#block"
                          style={{
                            color: "#2196F3",
                            textDecoration: "none",
                            borderRight: "1px solid grey",
                            padding: "0 8px",
                          }}
                        >
                          Block Users
                        </Link>
                        <Link
                          component={Link}
                          to="#view"
                          style={{ color: "#2196F3", textDecoration: "none", padding: "0 8px" }}
                        >
                          View Details
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td className="tableCell">
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                    <td>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link
                          component={Link}
                          to="#block"
                          style={{
                            color: "#2196F3",
                            textDecoration: "none",
                            borderRight: "1px solid grey",
                            padding: "0 8px",
                          }}
                        >
                          Block Users
                        </Link>
                        <Link
                          component={Link}
                          to="#view"
                          style={{ color: "#2196F3", textDecoration: "none", padding: "0 8px" }}
                        >
                          View Details
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td className="tableCell">
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                    <td>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link
                          component={Link}
                          to="#block"
                          style={{
                            color: "#2196F3",
                            textDecoration: "none",
                            borderRight: "1px solid grey",
                            padding: "0 8px",
                          }}
                        >
                          Block Users
                        </Link>
                        <Link
                          component={Link}
                          to="#view"
                          style={{ color: "#2196F3", textDecoration: "none", padding: "0 8px" }}
                        >
                          View Details
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td className="tableCell">
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                    <td>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link
                          component={Link}
                          to="#block"
                          style={{
                            color: "#2196F3",
                            textDecoration: "none",
                            borderRight: "1px solid grey",
                            padding: "0 8px",
                          }}
                        >
                          Block Users
                        </Link>
                        <Link
                          component={Link}
                          to="#view"
                          style={{ color: "#2196F3", textDecoration: "none", padding: "0 8px" }}
                        >
                          View Details
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td className="tableCell">
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                    <td>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link
                          component={Link}
                          to="#block"
                          style={{
                            color: "#2196F3",
                            textDecoration: "none",
                            borderRight: "1px solid grey",
                            padding: "0 8px",
                          }}
                        >
                          Block Users
                        </Link>
                        <Link
                          component={Link}
                          to="#view"
                          style={{ color: "#2196F3", textDecoration: "none", padding: "0 8px" }}
                        >
                          View Details
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td className="tableCell">
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                    <td>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link
                          component={Link}
                          to="#block"
                          style={{
                            color: "#2196F3",
                            textDecoration: "none",
                            borderRight: "1px solid grey",
                            padding: "0 8px",
                          }}
                        >
                          Block Users
                        </Link>
                        <Link
                          component={Link}
                          to="#view"
                          style={{ color: "#2196F3", textDecoration: "none", padding: "0 8px" }}
                        >
                          View Details
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;


