import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import Dashboard from "./CMS/Dashboard";
import ManageUsers from "./CMS/ManageUsers";
import ManageBusiness from "./CMS/ManageBusiness";
import SignIn from "./CMS/SignIn";

const Layout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <SideNav />
<<<<<<< HEAD
    <div style={{ flex: 1}}>{children}</div>
=======
    <div style={{ flex: 1, }}>{children}</div>
>>>>>>> 5feeef1b932b68702ab058a742e21df78d55c644
  </div>
);
function App() {
  return (
    <Router>
      <Routes>
      <Route path="signIn" element={<SignIn />} />
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