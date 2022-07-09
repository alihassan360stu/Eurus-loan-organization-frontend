import React, { useState } from 'react'
import { AppBar, Toolbar, makeStyles,SwipeableDrawer } from '@material-ui/core';
import { NavBarContant } from './NavBarContant';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { checkingResponsive } from '../../reduxStore/ReduxSlice';


const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "rgb(215, 224, 225)",
        // boxShadow:"none" ,
        position:"static",
    },
    image: {
        margin: "7px",
        height: "70px",
        marginLeft: "100px",
        flexGrow: 1
    },
    homeMenuIcon: {
        fontSize: "8vw",
        cursor: "pointer",
        color:"#662d91",
        "&:hover": {
            color: "#8cc63f"
        }
    },
    drawerSetting: {
        minWidth: "300px",
        right: "30vw"
    }
}))


export const AppBarMenu = () => {
    const [openDrawer, setOpenDrawer] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = useTheme();
    const isResponsive = useMediaQuery(theme.breakpoints.down("sm"));
    dispatch(checkingResponsive(isResponsive));
    return (

        <AppBar className={classes.appBar}>
            <Toolbar>
                <span style={{ marginLeft: (isResponsive) ? "30px" : "100px" }} className={classes.image}>
                    <img src="https://finteon.com/wp-content/uploads/2021/07/Finteon_Logo_Col-261x72.png" alt="simple logo" />
                </span>
                {
                    (!isResponsive) ? <NavBarContant align="horizontal" width={null} />
                        :
                        <MenuSharpIcon className={classes.homeMenuIcon} onClick={() => { setOpenDrawer(true); }} />
                }

            </Toolbar>
            {
                (isResponsive) && (<SwipeableDrawer className={classes.drawerSetting} open={openDrawer} onClose={() => { setOpenDrawer(false) }}>
                    <NavBarContant align="vertical" width={true} closeDrawer={(a)=>{setOpenDrawer(a)}} />
                </SwipeableDrawer>)
            }

        </AppBar>

    )
}