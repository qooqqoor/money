import React from "react";
import IconButton from "@material-ui/core/IconButton";
import './index.sass'
import Icon from '@material-ui/core/Icon';
const IconBtn = (props) =>{
    const {children,color,startIcon,size,className,onClick,ref} = props


    return(
        // <Button
        //     className={`${color?color:'default'}`}
        //     variant="contained"
        //     startIcon={startIcon}
        //     disableElevation
        //     size={size}
        // >
        //     {children}
        // </Button>

        <IconButton

            aria-label="add an alarm"
            className={`${color?color:'default'}  ${className} `}
            onClick={onClick}

        >
            <Icon>{startIcon}</Icon>

        </IconButton>
    )
}

export  default IconBtn