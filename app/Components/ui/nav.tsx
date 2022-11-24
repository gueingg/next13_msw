"use client";

import SessionContext from "../AuthContext";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

export default function Nav() {
  const router = useRouter();

  const LogoutHandler = () => {
    Cookies.remove("session");
    router.push("/login");
    return <div>Logging out</div>;
  };

  const ProtectedHanler = () => {
    const session = useContext(SessionContext);
    if (session.hp === undefined) {
      router.push("/login");
    }
    return (
      <div style={{ display: "flex" }}>
        <p>Protected data for {session.hp}</p>
        <Button onClick={LogoutHandler} color="inherit">
          Logout here
        </Button>
      </div>
    );
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "grey.900" }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          관리자
        </Typography>
        {/* <ProtectedHanler></ProtectedHanler> */}
      </Toolbar>
    </AppBar>
  );
}
