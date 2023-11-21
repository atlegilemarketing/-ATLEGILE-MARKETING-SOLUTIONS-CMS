import React from "react";
import "../App.css";
function Dashboard() {
  return (
    <div className="mainContainer">
      <div className="ribbonContaier"></div>
      <div className="dashboardContainer">
        <h2>Dashboard</h2>
        <div className="statsContainer">
          <div style={{ display: "flex", flexDirection: "column", width: 122 }}>
            <p>Sales</p>
            <p className="statsNumber">200</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 122 }}>
            <p>Sales</p>
            <p className="statsNumber">200</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 122 }}>
            <p>Sales</p>
            <p className="statsNumber">200</p>
          </div>
        </div>
        <div className="tableContainer">
          <div className="tableBoxContainer" style={{ marginRight: 8 }}>
            <h2>New Users</h2>
            <div
              style={{ width: "100%", height: 500, backgroundColor: "grey" }}
            >
                <table style={{width: "100%",  height: 500,}}>
    <thead style={{height:"55px", width: "154px"}}>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody style={{height:275, width:770}}>
      <tr>
        <td>Jane</td>
        <td>Doe</td>
        <td>0123456789</td>
        <td>example@mail.com</td>
        <td className="tableCell">1235 Vilakazi Street, Orlando West, Soweto, 1804, South Africa</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Doe</td>
        <td>0123456789</td>
        <td>example@mail.com</td>
        <td className="tableCell">1235 Vilakazi Street, Orlando West, Soweto, 1804, South Africa</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Doe</td>
        <td>0123456789</td>
        <td>example@mail.com</td>
        <td className="tableCell">1235 Vilakazi Street, Orlando West, Soweto, 1804, South Africa</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Doe</td>
        <td>0123456789</td>
        <td>example@mail.com</td>
        <td className="tableCell">1235 Vilakazi Street, Orlando West, Soweto, 1804, South Africa</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Doe</td>
        <td>0123456789</td>
        <td>example@mail.com</td>
        <td> 1235 Vilakazi, Orlando West, Soweto, 1804, South Africa</td>
      </tr>
    </tbody>
  </table>
            </div>
          </div>
          <div className="vLine">
          </div>
          <div className="tableBoxContainer" style={{ marginLeft: 8 }}>
            <h2>New Businesses</h2>
            <div
              style={{ width: "100%", height: 500, backgroundColor: "grey" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;