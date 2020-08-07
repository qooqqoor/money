import React from "react";
import Button from "@material-ui/core/Button";
import './index.sass'
import Icon from '@material-ui/core/Icon';
const Btn = (props) =>{
    const {children,color,startIcon,size} = props


    return(
        <Button
            className={`${color?color:'default'}`}
            variant="contained"
            startIcon={<Icon>{startIcon}</Icon>}
            disableElevation
            size={size}
        >
            {children}
        </Button>
    )
}

export  default Btn