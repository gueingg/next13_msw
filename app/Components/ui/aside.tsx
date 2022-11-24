"use client";

import {
  Drawer,
  Box,
  Toolbar,
  List,
} from "@mui/material";
import { User as UserIcon } from "../../../public/icons/user";
import { Users as UsersIcon } from "../../../public/icons/users";
import { NavItem } from "./navItem";

const drawerWidth = 240;

const Aside = () => {
  const items = [
    {
      href: "/dashboard",
      icon: <UsersIcon fontSize="small" />,
      title: "Home",
    },
    {
      href: "/dashboard/lists",
      icon: <UserIcon fontSize="small" />,
      title: "List",
    },
    {
      href: "/dashboard/timer",
      icon: <UserIcon fontSize="small" />,
      title: "Timer",
    },
    {
      href: "/dashboard/form",
      icon: <UserIcon fontSize="small" />,
      title: "Form",
    },
  ];

  const content = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            ></NavItem>
          ))}
        </Box>
      </div>
    </Box>
  );
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      PaperProps={{
        sx: {
          backgroundColor: "grey.900",
        },
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar></Toolbar>
      <Box>
        <List>
          <Box sx={{ flexGrow: 1 }}>
            {items.map((item) => (
              <NavItem
                key={item.title}
                icon={item.icon}
                href={item.href}
                title={item.title}
              ></NavItem>
            ))}
          </Box>
        </List>
      </Box>
    </Drawer>
  );
};

export default Aside;
