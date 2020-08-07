import React,{useState} from "react";
import Grid from "@material-ui/core/Grid";
import SearchForm from "../../SearchForm";
import Hidden from "@material-ui/core/Hidden";
import Button from "../../Button";
import IconButton from "../../IconButton";
import Icon from '@material-ui/core/Icon';
import './index.sass'

const ChecklistTitle = (props) =>{

    const {listTitle} = props
    const [searchInput, setSearch] = useState(false);


    return(
        <Grid  className="ChecklistTitle" container spacing={2}>
            <Grid item lg={6} md={9}  sm={8} xs={searchInput?'auto':6}>
                <SearchForm searchInput={searchInput} searchClick={()=>{
                    setSearch(!searchInput)
                }

                }/>
            </Grid>

            {!searchInput&&
                <Grid className="ChecklistAdd" item lg={6} md={3}  sm={4} xs={6} >
                    <Hidden smDown>
                        <Button startIcon={listTitle.Addicon} size="medium">
                            {listTitle.Add}
                        </Button>
                    </Hidden>
                    <Hidden mdUp>
                        {/*    <IconButton className='iconFloat'  startIcon={listTitle.Addicon}  />*/}
                        <IconButton className='iconFloat' startIcon={listTitle.Addicon}  />
                    </Hidden>

                </Grid>
            }

        </Grid >
    )
}



export default ChecklistTitle