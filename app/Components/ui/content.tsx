"use client";

import { Box, Toolbar, Typography } from "@mui/material";

const Content = ({children} : {children: React.ReactNode}) => {
  return (
    <Box component="section" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {children}
    </Box>
  );
};

export default Content;
