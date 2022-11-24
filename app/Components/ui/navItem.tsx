'use client';

import { Button, ListItem, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

type NavProp = {
  href : string,
  icon : React.ReactNode,
  title: string
}

export const NavItem = (props: NavProp) => {
  const { href, icon, title, ...others } = props;
  const router = useRouter();
  const active = href ? router.pathname === href : false;
  return (
    <ListItem
      disableGutters
      sx={{ display: "flex", mb: 0.5, py: 0, px: 2 }}
      {...others}
    >
      <Link href={href} passHref>
        <Button
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: active && "rgba(255,255,255, 0.08)",
            borderRadius: 1,
            color: active ? "secondary.main" : "grey.300",
            fontWeight: active && "fontWeightBold",
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: active ? "secondary.main" : "grey.400",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </Link>
    </ListItem>
  );
};

