import React from "react";
import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import { formStyles } from "../../../assets/styles/formStyles";

function useTable(records, headCells) {
   const classes = formStyles();

   const TblContainer = (props) => <Table className={classes.table}>{props.children}</Table>;

   const TblHead = (props) => {
      return (
         <TableHead>
            <TableRow>
               {headCells.map((cell) => (
                  <TableCell key={cell.id}>{cell.label}</TableCell>
               ))}
            </TableRow>
         </TableHead>
      );
   };

   return {
      TblContainer,
      TblHead,
   };
}

export default useTable;
