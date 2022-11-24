'use client';

import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";
import { getSessionCookie } from "../utils/session";
import Login from "./login/login";

const SessionContext = createContext(getSessionCookie());

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthProvider = ({children} : AuthContextProps) => {
  const [session, setSession] = useState(getSessionCookie());
  useEffect(() => {
    setSession(getSessionCookie());
  },[])

  return(
    <SessionContext.Provider value={session}>
      <SessionContext.Consumer>
        {(session)=>session === undefined ? <Login></Login> : <>{children}</>}
      </SessionContext.Consumer>
    </SessionContext.Provider>
  )
}

export default SessionContext;