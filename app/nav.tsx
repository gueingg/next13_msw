"use client";

import styled from "@emotion/styled";
import Link from "next/link";
const NavWarp = styled.nav`
  display: flex;
  gap: 20px;
`
export default function Nav() {
  return (
    <NavWarp>
      <Link href="/">Home</Link>
      <Link href="/dashboard">DashBoard</Link>
      <Link href="/dashboard/lists">Lists</Link>
    </NavWarp>
  );
}
