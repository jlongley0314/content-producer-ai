import React from 'react'
import { FormControlLabel, FormControl, FormLabel, RadioGroup as MuiRadioGroup, Radio } from '@mui/material'

function RadioGroup(props) {
    return (
        <FormControl>
            <FormLabel>{props.label}</FormLabel>
            <MuiRadioGroup row={props.row}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            >
                {
                    props.items.map(item => (
                        <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                    )
                    )

                }

            </MuiRadioGroup>
        </FormControl>
    )
}

export default RadioGroup
