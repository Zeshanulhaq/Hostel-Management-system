import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

export default function GetApprovedHostels() {
  const Admin_jwt_token = localStorage.getItem("admin_jwt");

  const [hstldata, sethstldata] = useState("");

  useEffect(() => {
    axios
      .get("get/approved/hostels", {
        headers: { Authorization: `Bearer ${Admin_jwt_token}` },
      })
      .then((response) => {
        console.log(response.data.data);
        sethstldata(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [Admin_jwt_token]);
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <Typography variant="h3">Approved Hotels</Typography>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>phone</TableCell>
            <TableCell>address</TableCell>
            <TableCell>Hostel Email</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hstldata.length > 0 &&
            hstldata.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.hostel_name}</TableCell>
                <TableCell>{row.hostel_phone}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.hostelemail}</TableCell>
                <TableCell align="right">{`$${row.city}`}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
