import React from 'react'
import { Select, MenuItem, Box } from '@material-ui/core'
import { useState } from 'react'

const Login = () => {
    const [selections,setSelection]=useState(" ");
   function  changeSelectData (e)
   {
   setSelection(e.target.value);
   }

  return (
  <>
<Box style={{marginLeft:"20vw"}}>
<Select value={selections} onChange={changeSelectData}>
   <MenuItem value=" " disabled>c languages</MenuItem>
   <MenuItem value={1}>java languages</MenuItem>
   <MenuItem value={2}>c++ languages</MenuItem>
   <MenuItem value={3}>HTML languages</MenuItem>
   <MenuItem value={4}>Css languages</MenuItem>
   <MenuItem value={5}>mui languages</MenuItem>
   <MenuItem value={6}>C sharp languages</MenuItem>
  </Select>
</Box>
  </>
  ) 
}

export default Login