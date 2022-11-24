"use client";

import React, { useState, useContext } from "react";
import { setSessionCookie } from "../../utils/session";
import { useRouter } from "next/navigation";
import SessionContext from "../AuthContext";
const Login = () => {
  const router = useRouter();
  const session = useContext(SessionContext);

  const LoginHandler = () => {
    const [hp, setHp] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      await new Promise((r) => setTimeout(r(), 1000));
      setSessionCookie({ hp });
      router.push("/dashboard");
      setLoading(false);
    };
    if (loading) {
      return <h2>Loggin in...</h2>;
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Enter Hp"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
        ></input>
        <input type="submit" value="Login"></input>
      </form>
    );
  };

  return <LoginHandler></LoginHandler>;
};

export default Login;
