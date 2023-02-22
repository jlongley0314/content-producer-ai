import React from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//     root: {
//         height: 20,
//     },
// });
function Select(props) {
    const { className, variant, label, name, value, onChange, ...other } =
        props;
    // const classes = useStyles();

    return (
        <FormControl
            className={props.className}
            variant={props.variant}
            size='small'
        >
            <InputLabel>{props.label}</InputLabel>
            <MuiSelect
                // className={classes.root}
                label={props.label}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                {...other}
            >
                {/* <MenuItem value="">All</MenuItem> */}
                {props.options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.title}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
}

export default Select;
