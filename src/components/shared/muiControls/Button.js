import { Button as MuiButton } from '@mui/material'
import React from 'react'

function Button(props) {
    const { ...other } = props
    return (
        <MuiButton
            variant={props.variant}
            size={props.size}
            color={props.color}
            onClick={props.onClick}
            {...other}
        >
            {props.text}
        </MuiButton>
    )
}

export default Button
