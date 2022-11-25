'use client';

import React, { createContext, useEffect, useState, useRef, useReducer, useContext } from "react";
import { getSessionCookie } from "../utils/session";
import Login from "./login/login";

type User = {
  name: string,
  tel: string,
  email : string
}

type INITIALTYPE ={
  session: string,
  isAuthenticated: boolean,
  isLoading: boolean,
  user : User
}

const HANDLERS = {
  INITIALZE: 'INITITALZE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
}

const initialState = {
  session: null,
  isAuthenticated: false,
  isLoading: true,
  user: null
}

const handlers = {
  [HANDLERS.INITIALZE]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      ...(
        user ? ({isAuthenticated: true, isLoading: false, user}) : ({isLoading: false})
      )
    }
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    }
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null
    }
  }
}

const reducer = (state, action) => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);

const SessionContext = createContext(getSessionCookie());

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthProvider = ({children} : AuthContextProps) => {
  const [session, setSession] = useState(getSessionCookie());
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    if(initialized.current){
      return;
    }
  }

  initialized.current = true;

  try {
    if(session){
      const user = {}
      
      dispatch({
        type: HANDLERS.INITIALZE,
        payload: user
      })
    }else{
      dispatch({
        type: HANDLERS.INITIALZE
      })
    }
  } catch (err) {
    console.error(err);
    dispatch({
      type: HANDLERS.INITIALZE
    })
  }

  useEffect(() => {
    setSession(getSessionCookie());
  },[])

  useEffect(() => {
    initialize().catch(console.error);
  })

  const signIn = (user) => {
    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user
    })
  };

  const signOut = () => {
    dispatch({
      type: HANDLERS.SIGN_OUT
    })
  }

  return(
    <SessionContext.Provider value={{...state, signIn, signOut}}>
      {/* <SessionContext.Consumer>
        {({session})=>session === undefined ? <Login></Login> : <>{children}</>}
      </SessionContext.Consumer> */}
      {children}
    </SessionContext.Provider>
  )
}

export const AuthConsumer = SessionContext.Consumer;

export const useAuthContext = () => useContext(SessionContext);

export default SessionContext;