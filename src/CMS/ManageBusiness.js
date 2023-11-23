import React from "react";
import { Box, Typography, Button } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SearchIcon from "@mui/icons-material/Search";
import clipArt from "../images/clipArtBusinesses.png";


export default function ManageBusinesses() {
  const handleActions = () => {
    alert("Actions clicked");
  };

  const fakeBusinessesList = [
    {
      id: "00",
      name: "Tech Logistics",
      regNum: "N/A",
      bizType: "Township",
      Industry: "Technology",
      actions: "View Details",
    },
    {
      id: "01",
      name: "Tech Logistics",
      regNum: "N/A",
      bizType: "Township",
      Industry: "Technology",
      actions: "View Details",
    },
    {
      id: "02",
      name: "Tech Logistics",
      regNum: "N/A",
      bizType: "Township",
      Industry: "Technology",
      actions: "View Details",
    },
    {
      id: "03",
      name: "Tech Logistics",
      regNum: "N/A",
      bizType: "Township",
      Industry: "Technology",
      actions: "View Details",
    },
    {
      id: "04",
      name: "Tech Logistics",
      regNum: "N/A",
      bizType: "Township",
      Industry: "Technology",
      actions: "View Details",
    },
    {
      id: "05",
      name: "Tech Logistics",
      regNum: "N/A",
      bizType: "Township",
      Industry: "Technology",
      actions: "View Details",
    },
  ];

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
            MANAGE BUSINESSES
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
          <Typography sx={{ fontWeight: 700 }}>USERS</Typography>
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
            <Typography sx={{ fontWeight: 600 }}>Type of Business</Typography>
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
        {fakeBusinessesList.map((business) => (
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
              <Typography >{business.name}</Typography>
            </Box>

            <Box
              sx={{
                width: "20%",
                pl: 2,
                pr: 2,
              }}
            >
              <Typography >{business.regNum}</Typography>
            </Box>

            <Box
              sx={{
                width: "20%",
                pl: 2,
                pr: 2,
              }}
            >
              <Typography >{business.bizType}</Typography>
            </Box>

            <Box
              sx={{
                width: "20%",
                pl: 2,
                pr: 2,
              }}
            >
              <Typography >{business.Industry}</Typography>
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
  );
}
