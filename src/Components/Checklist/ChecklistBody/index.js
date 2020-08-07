import React from "react";
import './index.sass'

import Hidden from "@material-ui/core/Hidden";
import PCTable from './PCTable'
import IconButton from "../../IconButton";



const ChecklistBody = (props) => {


    const {date, dateTitle} = props



    return (
        <div className="ChecklistBody">


            {/*PC端*/}
            <Hidden xsDown>
                <PCTable date={date} dateTitle={dateTitle}/>
            </Hidden>
            {/*PC端*/}

            <Hidden smUp>
                <div className='ChecklistBody-Boxs'>
                    <div className='ChecklistBody-Box'>
                        <div className='ChecklistBody-Box-data'>
                            <div>
                                <span>1</span>
                                <span></span>
                            </div>
                            <div>
                                <span>客戶名稱：</span>
                                <span>gb</span>
                            </div>
                            <div>
                                <span>狀態：</span>
                                <span>啟用</span>
                            </div>
                            <div>
                                <span>最後更新時間：</span>
                                <span>2020-08-05</span>
                            </div>
                        </div>
                        <div className='ChecklistBody-Box-action'>
                            <IconButton  startIcon='create' />
                            <IconButton  startIcon='delete_forever' />
                        </div>
                    </div>

                    <div className='ChecklistBody-Box'>
                        <div className='ChecklistBody-Box-data'>
                            <div>
                                <span>1</span>
                                <span></span>
                            </div>
                            <div>
                                <span>客戶名稱：</span>
                                <span>gb</span>
                            </div>
                            <div>
                                <span>狀態：</span>
                                <span>啟用</span>
                            </div>
                            <div>
                                <span>最後更新時間：</span>
                                <span>2020-08-05</span>
                            </div>
                        </div>
                        <div className='ChecklistBody-Box-action'>
                            <IconButton  startIcon='create' />
                            <IconButton  startIcon='delete_forever' />
                        </div>
                    </div>
                </div>
            </Hidden>

        </div>
    )
}

export default ChecklistBody