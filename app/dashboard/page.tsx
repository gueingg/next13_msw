import React from "react";
import Form from "./form";

const Page = () => {
  return (
    <>
      <h1>개인정보 입력</h1>
      <Form></Form>
    </>
  );
};

Page.displayName = "Home";
export default React.memo(Page);
