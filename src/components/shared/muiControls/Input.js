import React from "react";
import { TextField } from "@mui/material";
function Input(props) {
   const { className, variant, label, name, value, onChange, ...other } = props;

   return (
      <TextField
         className={props.className}
         variant={props.variant}
         label={props.label}
         name={props.name}
         value={props.value}
         onChange={props.onChange}
         rows={props.rows}
         placeholder={props.placeholder}
         {...other}
      />
   );
}

export default Input;
