import React from "react";
import Main from "../Components/dashboard/main";

const Page = () => {
  return (<div><Main></Main></div>);
};

Page.displayName = "Home";
export default React.memo(Page);
