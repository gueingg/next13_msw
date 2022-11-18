import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div><Link href={'/dashboard/form'}>Form</Link></div>
    </>
  );
};

Page.displayName = "Home";
export default React.memo(Page);
