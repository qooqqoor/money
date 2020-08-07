import IconButton from "../IconButton";
import Search from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Hidden from "@material-ui/core/Hidden";
import Icon from '@material-ui/core/Icon';
import './index.sass'
//搜尋畫面
const SearchForm = (props) =>{
    const {searchInput,searchClick} = props


    return(
        <Grid className='searchForm' container>
            <Grid className='searchFormText' item lg={4} md={4} sm={4} xs={12}>
                <span>客戶列表</span>
                {/*手機端*/}
                <Hidden smUp>
                    {searchInput&&(
                        <div className='searchFormText-mobile'>
                            <input type="text" placeholder="請輸入名稱關鍵字"/>
                            <Icon className='searchFormText-icon' onClick={()=>searchClick()}>clear</Icon>
                        </div>

                    )}
                    <IconButton startIcon='search' onClick={()=>searchInput?'':searchClick()}/>
                </Hidden>
                {/*手機端*/}
            </Grid>

            {/*PC端*/}
            <Hidden xsDown>
                <Grid className='searchFormSearch' item lg={8} md={8}  sm={8} >
                        <input type="text" placeholder="請輸入名稱關鍵字"/>
                        <IconButton startIcon={<Search />}/>
                </Grid>
            </Hidden>
            {/*PC端*/}

        </Grid>
    )
}

export default SearchForm