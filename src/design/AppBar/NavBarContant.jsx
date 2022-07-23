import React from 'react'
import { useState } from 'react';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import {
    makeStyles,
    Tabs,
    Tab,
    Menu,
    MenuItem,
    Button,
} from '@material-ui/core';
import { Link } from "react-router-dom";
let navData = ["Home", ["Platform", "Orbis-digital platform", "ePORA Automated", "Regulatory Report"],
    ["Serveses", "Cheif Techology Office as a serves (CTOaas)", "ICT Strategy Review"], "Partners", ["  About", "Case Studies"], "Contact"];

let rout = ["/", "#", "#", "#", "#"];
const useStyles = makeStyles({
    tabCustomizing: {
        color: "#662d91",
        textTransform: "capitalize",
        minWidth: "110px",
        padding: "0px",
        margin: "0px",
        fontSize: "100%",
        fontWeight: "900",
        '&:hover': {
            color: "#8dc63f",
            "& #ali": {
                color: "#8dc63f"
            }
        },
    },
    TabsStyle: {
        lineHeight: "100px",
        flexGrow: 1,

    },
    dropDownIcon: {
        position: "absolute",
        left: "88px",
        color: "#662d91"
    },
    liveChatButton: {
        height: "7vh",
        width: "10vw",
        backgroundColor: "#662d91",
        borderRadius: "23px",
        color: "white",
        "&:hover": {
            backgroundColor: "#8cc63f",
        }
    },
    menuItemStyle: {
        margin: "0px",
    }
})


export const NavBarContant = (props) => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(null);
    const [anchorOfMenu, setAnchorOfMenu] = useState(null);
    const [indexvalue, setIndexValue] = useState(-1);


    const navBarMenuClose = () => {
        setAnchorOfMenu(null);
    }

    const tabHandle = (obj, addressOfClick) => {
        setTabValue(addressOfClick);
    }

    return (
        <>
          <Tabs scrollButtons="auto" variant="scrollable" className={classes.TabsStyle}
                value={tabValue} onChange={tabHandle} orientation={props.align} style={{ width: (props.width) ? "250px" : "60vw" }}
                TabIndicatorProps={{ style: (props.width) ? { display: "none" } : { height: "0.7vh", backgroundColor: "#8cc63f", } }} >
                {
                    // i have used map method for iterate navData array ( menu data like home , partner , about )
                    navData.map((name, index) => {
                        return (
                            (name[0].length !== 1) ?
                                /* we have menu list in nav bar and its store in the navData array 
                                   name[0] why because menu list data store in array and then that
                                   array store in navBar array [multi D navBar array]  
                                */

                                <div key={index}> 
                                    <span
                                        onClick={(currentobject) => { setAnchorOfMenu(currentobject.currentTarget); setIndexValue(index); }}>
                                        <Tab className={classes.tabCustomizing} onClick={() => { setTabValue(index) }}
                                            label={<><ArrowDropDownOutlinedIcon id="ali" className={classes.dropDownIcon} />{name[0]}</>} />
                                    </span>

                                    {
                                        (index === indexvalue) &&
                                        (
                                            <Menu key={index + 20} style={{ top: "72px", }} onClose={navBarMenuClose} anchorEl={anchorOfMenu} open={Boolean(anchorOfMenu)}>
                                                {
                                                    navData[index].map((a, b) => {
                                                        return (< MenuItem key={b} className={classes.menuItemStyle} onClick={() => { props.closeDrawer(false); navBarMenuClose() }}>{a}</MenuItem>)
                                                    })
                                                }
                                            </Menu>
                                        )
                                    }
                                </div>
                                :
                                 <div key={index}>
                                    <Link key={index + 80} to={rout[0]} >
                                        <Tab className={classes.tabCustomizing} onClick={() => { setTabValue(index) }} label={name} />
                                    </Link>
                                </div>
                        )
                    })
                }
            </Tabs>
            <Button className={classes.liveChatButton}>Live Chat</Button>
        </>

    )
}
