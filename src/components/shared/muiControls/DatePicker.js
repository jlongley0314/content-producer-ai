import React from "react";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const convertToDefEventPara = (name, value) => ({
    target: {
        name,
        value,
    },
});

function DatePicker(props) {
    const {className, label, name, value, ...other} = props;
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant='inline'
                inputVariant='outlined'
                className={props.className}
                label={props.label}
                format='MMM/dd/yyyy'
                name={props.name}
                value={props.value}
                disabled={props.disabled}
                onChange={(date) =>
                    props.onChange(convertToDefEventPara(props.name, date))
                }
                {...other}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DatePicker;
