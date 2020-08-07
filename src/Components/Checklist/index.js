import React from "react";
import ChecklistTitle from "./ChecklistTitle";
import ChecklistBody from "./ChecklistBody";

import './index.sass'


//表格



const Checklist = () =>{

    const date = [
        {
            name:'gb',
            use:true,
            time:'2020-03-11 11:00',
            delete:false
        },
        {
            name:'Kelly',
            use:false,
            time:'2020-03-06 11:00',
            delete:true
        },
        {
            name:'Iris',
            use:true,
            time:'2020-12-11 11:00',
            delete:false
        },
        {
            name:'Edward',
            use:true,
            time:'2020-11-11 11:00',
            delete:false
        },
        {
            name:'Henry',
            use:false,
            time:'2020-03-15 11:00',
            delete:true
        },
        {
            name:'Aleen',
            use:true,
            time:'2020-03-11 11:00',
            delete:true
        },

    ]
    const dateTitle= {
        id: '',
        name: '客戶名稱',
        status: '狀態',
        datetime: '最後修改時間',
        action: '動作'
    }

    const listTitle= {
        title: '客戶列表',
        placeholder: '請輸入名稱關鍵字',
        Addicon: 'person_add',
        Add: '新增客戶',
    }

    return(
        <div className="Checklist">
            <ChecklistTitle listTitle={listTitle}/>

            <ChecklistBody date={date} dateTitle={dateTitle}/>


        </div>
    )
}

export default Checklist