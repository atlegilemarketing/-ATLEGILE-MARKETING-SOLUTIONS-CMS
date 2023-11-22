import React from "react";
import { PiCaretUpDownFill } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import clipArt from "../images/clipArtBusinesses.png";
import './manageBusiness.css'

export default function ManageBusinesses() {

  function calculateBackgroundProperties() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let backgroundPositionX, backgroundPositionY, backgroundSize;

    // Define the standard screen sizes and their corresponding values
    const screenSizes = [
      {
        width: 1515,
        height: 1441,
        positionX: 340,
        positionY: -150,
        size: "700px 450px",
      },
      {
        width: 1738,
        height: 871,
        positionX: 530,
        positionY: -115,
        size: "600px 350px",
      },
      // Add more screen sizes and values as needed
    ];

    // Calculate the ratio of the screen size to the standard sizes
    const matchingSize = screenSizes.find(
      (size) => size.width === screenWidth && size.height === screenHeight
    );

    if (matchingSize) {
      backgroundPositionX = matchingSize.positionX;
      backgroundPositionY = matchingSize.positionY;
      backgroundSize = matchingSize.size;
    } else {
      // Calculate ratios for custom screen sizes
      const ratioX = screenWidth / screenSizes[0].width;
      const ratioY = screenHeight / screenSizes[0].height;

      backgroundPositionX = Math.round(screenSizes[0].positionX * ratioX);
      backgroundPositionY = Math.round(screenSizes[0].positionY * ratioY);
      backgroundSize = `${Math.round(700 * ratioX)}px ${Math.round(
        450 * ratioY
      )}px`;
    }
    backgroundPositionX += (backgroundPositionX/2);
    backgroundPositionY += 0;
    return { backgroundPositionX, backgroundPositionY, backgroundSize };
  }

  const { backgroundPositionX, backgroundPositionY, backgroundSize } =
    calculateBackgroundProperties();

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        height: "100%",
      }}
    >
      
      <div style={{ height: "100%", width: "100%" }}>
        <div
          style={{
            height: "15%",
            backgroundColor: "#072840",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: 600,
              paddingLeft: 20,
              width: "20%",
            }}
          >
            Manage Businesses
          </span>
          <div
            style={{
              backgroundImage: `url(${clipArt})`,
              width: "80%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: `${backgroundPositionX}px ${backgroundPositionY}px`,
              backgroundSize: backgroundSize,
              height: "100%",
            }}
          ></div>
        </div>

        <div style={{ padding: 20 }}>
          <div
            style={{
              paddingBottom: 10,
              border: "none",
              borderBottom: "1px lightgray solid",
              marginLeft: 10,
            }}
          >
            <span style={{ fontWeight: 700 }}>USERS</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: 50,
              paddingBottom: 50,
              marginLeft: 10,
            }}
          >
            <div
              style={{ width: "20%", display: "flex", flexDirection: "column" }}
            >
              <span style={{ color: "gray" }}>Sales</span>
              <span style={{ fontWeight: 400 }}>300</span>
            </div>

            <div
              style={{ width: "20%", display: "flex", flexDirection: "column" }}
            >
              <span style={{ color: "gray" }}>New Businesses</span>
              <span style={{ fontWeight: 400 }}>300</span>
            </div>

            <div
              style={{ width: "20%", display: "flex", flexDirection: "column" }}
            >
              <span style={{ color: "gray" }}>New Users</span>
              <span style={{ fontWeight: 400 }}>300</span>
            </div>
          </div>
          <div
            style={{
              paddingBottom: 10,
              border: "none",
              borderBottom: "1px lightgray solid",
              marginLeft: 10,
            }}
          >
            <span style={{ fontWeight: 700 }}>NEW BUSINESSES</span>
          </div>

          <div
            style={{
              width: "100%",
              backgroundColor: "#fafafa",
              display: "flex",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <span style={{ fontWeight: 600 }}>Business Name</span>
              <span
                style={{
                  border: "none",
                  borderRight: "1px lightgray solid",
                  paddingRight: 10,
                }}
              >
                <PiCaretUpDownFill color="gray" />
                <AiOutlineSearch color="gray" />
              </span>
            </div>

            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <span style={{ fontWeight: 600 }}>Reg Number</span>
              <span
                style={{
                  border: "none",
                  borderRight: "1px lightgray solid",
                  paddingRight: 10,
                }}
              >
                <PiCaretUpDownFill color="gray" />
              </span>
            </div>

            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <span style={{ fontWeight: 600 }}>Type of Business</span>
              <span
                style={{
                  border: "none",
                  borderRight: "1px lightgray solid",
                  paddingRight: 10,
                }}
              >
                <PiCaretUpDownFill color="gray" />
              </span>
            </div>

            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <span style={{ fontWeight: 600 }}>Industry</span>
              <span
                style={{
                  border: "none",
                  borderRight: "1px lightgray solid",
                  paddingRight: 10,
                }}
              >
                <PiCaretUpDownFill color="gray" />
              </span>
            </div>

            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <span style={{ fontWeight: 600 }}>Actions</span>
            </div>
          </div>
          <div>
            {fakeBusinessesList.map((business) => (
              <div
                key={business.id}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  style={{
                    width: "20%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <span style={{}}>{business.name}</span>
                </div>

                <div
                  style={{
                    width: "20%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <span style={{}}>{business.regNum}</span>
                </div>

                <div
                  style={{
                    width: "20%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <span style={{}}>{business.bizType}</span>
                </div>

                <div
                  style={{
                    width: "20%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <span style={{}}>{business.Industry}</span>
                </div>

                <div
                  style={{
                    width: "20%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <a
                    href="http://localhost:3000/"
                    style={{ textDecoration: "none", color: "#1890ff" }}
                  >
                    {business.actions}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
