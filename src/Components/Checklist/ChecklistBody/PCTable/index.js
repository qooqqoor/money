import React from "react";
import IconButton from "../../../IconButton";
// import Create from "@material-ui/icons/Create";
//
// import DeleteForever from "@material-ui/icons/DeleteForever";
import Icon from '@material-ui/core/Icon';
import './index.sass'

const PCTable = (props) =>{
    const {date,dateTitle} = props
    return(
        <table className="ChecklistBody-Table">
            <thead>
            <tr>
                <td>{dateTitle.id}</td>
                <td>{dateTitle.name}</td>
                <td>{dateTitle.status}</td>
                <td>{dateTitle.datetime}</td>
                <td>{dateTitle.action}</td>
            </tr>
            </thead>

            <tbody>
            {
                date.map((item,index)=>{
                    return(
                        <tr key={item.name}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td
                                style={{color:item.use?'green':'red'}}
                            >
                                {item.use?'啟用':'停用'}
                            </td>
                            <td>{item.time}</td>
                            <td>
                                <IconButton  startIcon='create' />
                                {item.delete&&<IconButton  startIcon='delete_forever' />}

                            </td>
                        </tr>
                    )
                })
            }


            </tbody>

        </table>

    )
}

export default  PCTable