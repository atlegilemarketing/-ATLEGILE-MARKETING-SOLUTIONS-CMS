import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SearchIcon from "@mui/icons-material/Search";
import clipArt from "../images/clipArtWelcome.png";
import { firebase } from '../config';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function ManageBusinesses() {
  const [usersList, setUsersList] = useState([]);
  const [businessesList, setBusinessesList] = useState([]);
  const [user] = useAuthState(firebase.auth());

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const usersRef = firebase.firestore().collection('Users');
        const usersSnapshot = await usersRef.get();
        const usersData = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          surname: doc.data().surname,
          email: doc.data().email,
          phone: doc.data().phone,
          location: doc.data().location,
          actions: ['Block User', 'View Details'],
        }));
        setUsersList(usersData);

      
        const businessesRef = firebase.firestore().collection('Business');
        const businessesSnapshot = await businessesRef.get();
        const businessesData = businessesSnapshot.docs.map((doc) => ({
          id: doc.id,
          businessName: doc.data().businessName,
          regNumber: doc.data().regNumber,
          businessType: doc.data().businessType,
          industry: doc.data().industry,
          actions: ['Some Action'],
        }));
        setBusinessesList(businessesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const handleActions = () => {
    alert('Actions clicked');
  };
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          height: "20vh",
          backgroundColor: "#072840",
          display: "flex",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${clipArt})`,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "120% 50%",
            backgroundSize: "50%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: 30,
              fontWeight: 600,
              paddingLeft: 2,
            }}
          >
            WELCOME TO AMS
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: "80vh",
        }}
      >
        <Box
          sx={{
            ml: 4,
            mt: 4,
            border: "none",
            borderBottom: "1px lightgray solid",
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>DASHBOARD</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            ml: 4,
            mt: 8,
          }}
        >
          <Box
            sx={{
              width: "100px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "gray", fontSize: 12 }}>Sales</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 20 }}>300</Typography>
          </Box>

          <Box
            sx={{
              width: "100px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "gray", fontSize: 12 }}>
              New Businesses
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 20 }}>300</Typography>
          </Box>

          <Box
            sx={{
              width: "100px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "gray", fontSize: 12 }}>
              New Users
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 20 }}>300</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Box
            sx={{
              width: "50%",
              border: "none",
              borderRight
              : "1px lightgray solid",
            }}
          >
            <Box
              sx={{
                //paddingBottom: 10,
                border: "none",
                borderBottom: "1px lightgray solid",
                ml: 4,
                mt: 4,
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>NEW USERS</Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#fafafa",
                display: "flex",
                flexDirection: "row",
                ml: 2,
                mt: 2,
                pt: 2,
                pb: 2,
                border: "none",
                borderBottom: "1px lightgray solid",
              }}
            >
              <Box
                sx={{
                  width: "16.66%",
                  pl: 2,
                  pr: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "none",
                  borderRight: "1px lightgray solid",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Name</Typography>
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  <UnfoldMoreIcon />
                  <SearchIcon />
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "16.66%",
                  pl: 2,
                  pr: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "none",
                  borderRight: "1px lightgray solid",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Surname</Typography>
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  <UnfoldMoreIcon />
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "16.66%",
                  pl: 2,
                  pr: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "none",
                  borderRight: "1px lightgray solid",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Phone</Typography>
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  <UnfoldMoreIcon />
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "16.66%",
                  pl: 2,
                  pr: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "none",
                  borderRight: "1px lightgray solid",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Email</Typography>
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  <UnfoldMoreIcon />
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "16.66%",
                  pl: 2,
                  pr: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "none",
                  borderRight: "1px lightgray solid",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Location</Typography>
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  <UnfoldMoreIcon />
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "16.66%",
                  pl: 2,
                  pr: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Actions</Typography>
              </Box>
            </Box>

            {usersList.map((business) => (
              <Box
                key={business.id}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  border: "none",
                  borderBottom: "1px lightgray solid",
                  ml: 2,
                  mt: 2,
                  // pt: 2,
                  // pb: 2,
                }}
              >
                <Box
                  sx={{
                    width: "16.66%",
                    pl: 2,
                    pr: 2,
                    //border: "1px red solid",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography noWrap>{business.name}</Typography>
                </Box>

                <Box
                  sx={{
                    width: "16.66%",
                    pl: 2,
                    pr: 2,
                    //border: "1px red solid",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography noWrap>{business.surname}</Typography>
                </Box>

                <Box
                  sx={{
                    width: "16.66%",
                    pl: 2,
                    pr: 2,
                    //border: "1px red solid",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography noWrap>{business.phone}</Typography>
                </Box>

                <Box
                  sx={{
                    width: "16.66%",
                    pl: 2,
                    //pr: 2,
                    //border: "1px red solid",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography noWrap>{business.email}</Typography>
                </Box>

                <Box
                  sx={{
                    width: "16.66%",
                    pl: 1,
                    //pr: 1,
                    //border: "1px red solid",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography noWrap>{business.location}</Typography>
                </Box>

                <Box
                  sx={{
                    width: "16.66%",
                    pl: 1,
                    pr: 1,
                    display: "flex",
                    alignItems: "center",
                    //justifyContent: "center",
                    //border: "1px red solid",
                  }}
                >
                  <Button
                    onClick={handleActions}
                    variant="text"
                    //fullWidth
                    sx={{
                      textDecoration: "none",
                      color: "#1890ff",
                      display: "flex",
                      alignItems: "center",
                      //justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        pr: 1,
                        border: "none",
                        borderRight: "1px lightgray solid",
                      }}
                    >
                      <Typography sx={{ fontSize: 12 }}>
                        {business.actions[0]}
                      </Typography>
                    </Box>
                    <Box sx={{ pl: 1 }}>
                      <Typography sx={{ fontSize: 12 }}>
                        {business.actions[1]}
                      </Typography>
                    </Box>
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ width: "50%" }}>
            <Box
              sx={{
                //paddingBottom: 10,
                border: "none",
                borderBottom: "1px lightgray solid",
                ml: 4,
                mt: 4,
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>NEW BUSINESSES</Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#fafafa",
                display: "flex",
                flexDirection: "row",
                ml: 2,
                mt: 2,
                pt: 2,
                pb: 2,
                border: "none",
                borderBottom: "1px lightgray solid",
              }}
            >
              <Box
                sx={{
                  width: "20%",
                  pl: 2,
                  pr: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "none",
                  borderRight: "1px lightgray solid",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Business Name</Typography>
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  <UnfoldMoreIcon />
                  <SearchIcon />
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "20%",
                  pl: 2,
                  pr: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "none",
                  borderRight: "1px lightgray solid",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Reg Number</Typography>
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  <UnfoldMoreIcon />
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "20%",
                  pl: 2,
                  pr: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "none",
                  borderRight: "1px lightgray solid",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>
                  Type of Business
                </Typography>
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  <UnfoldMoreIcon />
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "20%",
                  pl: 2,
                  pr: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "none",
                  borderRight: "1px lightgray solid",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Industry</Typography>
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  <UnfoldMoreIcon />
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "20%",
                  pl: 2,
                  pr: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Actions</Typography>
              </Box>
            </Box>

            {businessesList.map((business) => (
              <Box
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
                <Box
                  sx={{
                    width: "20%",
                    pl: 2,
                    pr: 2,
                  }}
                >
                  <Typography>{business.businessName}</Typography>
                </Box>

                <Box
                  sx={{
                    width: "20%",
                    pl: 2,
                    pr: 2,
                  }}
                >
                  <Typography>{business.regNumber}</Typography>
                </Box>

                <Box
                  sx={{
                    width: "20%",
                    pl: 2,
                    pr: 2,
                  }}
                >
                  <Typography>{business.businessType}</Typography>
                </Box>

                <Box
                  sx={{
                    width: "20%",
                    pl: 2,
                    pr: 2,
                  }}
                >
                  <Typography>{business.industry}</Typography>
                </Box>

                <Box
                  sx={{
                    width: "20%",
                    pl: 1,
                    pr: 1,
                  }}
                >
                  <Button
                    onClick={handleActions}
                    variant="text"
                    //fullWidth
                    sx={{ textDecoration: "none", color: "#1890ff" }}
                  >
                    {business.actions}
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
