import { React } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Container } from "@mui/material";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const UserOrderTable = (orderData) => {

  function createData(name, description, price, quantity) {
    return { name, description, price, quantity };
  }
  const rows = orderData.items.map((item) =>
    createData(
      item.name,
      item.description,
      item.price.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      }),
      item.quantity,
     
    )
  );
 ;




  return (
    <div>
      <Box
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Container>
            <h1>Codigo del pedido {orderData.id}</h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Producto</StyledTableCell>
                  <StyledTableCell align="right">Descripcion</StyledTableCell>
                  <StyledTableCell align="right">Precio</StyledTableCell>
                  <StyledTableCell align="right">Cantidad</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.quantity}
                    </StyledTableCell>
               
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <h3>Precio Total $ {orderData.totalPrice}</h3>
        </Container>
      
      </Box>
    </div>
  );
};

export default UserOrderTable;
