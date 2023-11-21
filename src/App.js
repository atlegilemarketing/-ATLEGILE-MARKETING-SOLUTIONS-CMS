import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import Dashboard from "./CMS/Dashboard";
import ManageUsers from "./CMS/ManageUsers";
import ManageBusiness from "./CMS/ManageBusiness";

const Layout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <SideNav />
    <div style={{ flex: 1, padding: "16px" }}>{children}</div>
  </div>
);
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="businesses" element={<ManageBusiness />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;