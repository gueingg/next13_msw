'use client';

import {Box, CssBaseline} from '@mui/material';
import Aside from './aside';
import Content from './content';
import Nav from './nav';

const Body =({children} : {children: React.ReactNode})=> {
  return(
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <Nav></Nav>
      <Aside></Aside>
      <Content>{children}</Content>
    </Box>
  )
}
export default Body;