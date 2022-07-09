import { Box } from "@material-ui/core";
import React from 'react'
import { useSelector } from "react-redux";

let colors = ["#fafafa", "#e5c024f0", "#fafafa", "#fafafa", "#e5c024f0", "#fafafa"];

export const BoxesDesign = () => {
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
    return (

        <Box position="absolute" width="60%" height="30%" zIndex="5" top={(isBreakPoint) ? "-6vh" : "-10vh"} left="20vw">
            {
                colors.map((col, index) => {
                    return (
                        <Box key={index} bgcolor={col} display="inline-block" ml="10%"  width="6%" height={(isBreakPoint) ? "40%" : "100%"}
                         style={{transform:"rotate(40deg)"}}>
                        </Box>
                    )
                })
            }
        </Box >

    )
}
