import React from "react";
import "../App.css";
import SearchIcon from '@mui/icons-material/Search';

function Dashboard() {
  return (
    <div className="mainContainer">
      <div className="ribbonContaier"></div>
      <div className="dashboardContainer">
        <h2>Dashboard</h2>
        <div className="statsContainer">
          <div style={{ display: "flex", flexDirection: "column", width: 122 }}>
          <p className="statsName">Sales</p>
            <p className="statsNumber">300</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 122 }}>
            <p className="statsName">Sales</p>
            <p className="statsNumber">300</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 122 }}>
          <p className="statsName">Sales</p>
            <p className="statsNumber">300</p>
          </div>
        </div>
        <div className="tableContainer">
          <div className="tableBoxContainer" style={{ marginRight: 8 }}>
            <h2>New Users</h2>
            <div
              style={{ width: "100%", height: 500 }}
            >
              <table style={{ width: "100%", height: 500 }}>
                <thead style={{ height: "55px", width: "154px" }}>
                  <tr style={{backgroundColor: "#FAFAFA"}}>
                  <th>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        Name
                        <SearchIcon style={{ marginLeft: '4px'}}  />
                      </div>
                    </th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody style={{ height: "55px", width: "770px" }}>
                  <tr >
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td >
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                  </tr>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td >
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                  </tr>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td >
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                  </tr>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td >
                      1235 Vilakazi Street, Orlando West, Soweto, 1804, South
                      Africa
                    </td>
                  </tr>
                  <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>0123456789</td>
                    <td>example@mail.com</td>
                    <td>
                      1235 Vilakazi, Orlando West, Soweto, 1804, South Africa
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="vLine"></div>
          <div className="tableBoxContainer" style={{ marginLeft: 8 }}>
            <h2>New Businesses</h2>
            <div
              style={{ width: "100%", height: 500}}
            >
              <table style={{ width: "100%", height: 500 }}>
                <thead style={{ height: "55px", width: "770px", fontWeight:800, fontSize: "16" }}>
                <tr style={{backgroundColor: "#FAFAFA"}}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                        Business Name
                        <SearchIcon style={{ marginLeft: '4px'}} />
                      </div>
                    <th>Reg Number</th>
                    <th>Type of Business</th>
                    <th>Industry</th>
                  </tr>
                </thead>
                <tbody style={{ height: "55px", width: "770px" }}>
                  <tr style={{ height: "44px", width: "770px" }}>
                    <td>Tech Logistics</td>
                    <td>N/A</td>
                    <td>Township</td>
                    <td>Technology</td>
                  </tr>
                  <tr>
                    <td>Tech Logistics</td>
                    <td>N/A</td>
                    <td>Township</td>
                    <td>Technology</td>
                  </tr>
                  <tr>
                    <td>Tech Logistics</td>
                    <td>N/A</td>
                    <td>Township</td>
                    <td>Technology</td>
                  </tr>
                  <tr>
                    <td>Tech Logistics</td>
                    <td>N/A</td>
                    <td>Township</td>
                    <td>Technology</td>
                  </tr>
                  <tr>
                    <td>Tech Logistics</td>
                    <td>Doe</td>
                    <td>Township</td>
                    <td>Technology</td>
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
export default Dashboard;
