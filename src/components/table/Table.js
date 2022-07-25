import React from "react";
import "../table/table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
const TableList = ({ value }) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product Name</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">By Shipping Type</TableCell>
            <TableCell className="tableCell">State</TableCell>
            <TableCell className="tableCell">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.ProductName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.Quantity}</TableCell>
              <TableCell className="tableCell">{row.ByShippingType}</TableCell>
              <TableCell className="tableCell">{row.State}</TableCell>
              <TableCell className="tableCell">{row.Value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
