import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Devops", "Dummy1", "Data1", "$99"),
  createData(2, "AWS", "Dummy2", "Data2", "$89"),
  createData(3, "React", "Dummy2", "Data3", "$69"),
  createData(4, "Node", "Dummy2", "Data4", "$59"),
  createData(5, "Mongo DB", "Dummy2", "Data5", "$199"),
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "95%",
        maxWidth: "700px",
        color: "white",
        backgroundColor: "#3e3e3e",
        m: "auto",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Book Name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Publisher
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Book Price
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Edit
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
