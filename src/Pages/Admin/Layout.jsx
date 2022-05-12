import React from "react";
import Adminnav from "./Adminnav";
import Adminsidebar from "./Adminsidebar";

const Layout = (props) => {
  return (
    <div>
      <Adminnav />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Adminsidebar />
        <div style={{}}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
