import React from "react";
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

function Checkbox(props) {
   const { name, label, value, onChange } = props;

   const convertToDefEventPara = (name, value) => ({
      target: {
         name,
         value,
      },
   });
   return (
      <FormControl>
         <FormControlLabel
            label={label}
            control={
               <MuiCheckbox
                  name={name}
                  color="secondary"
                  checked={value}
                  onChange={(e) => onChange(convertToDefEventPara(props.name, e.target.checked))}
               />
            }
         />
      </FormControl>
   );
}

export default Checkbox;
