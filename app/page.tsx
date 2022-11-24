import React from "react";
import {cookies} from 'next/headers';
import { redirect } from "next/navigation";
const Page = () => {
  const nextCookies = cookies();
  const session = nextCookies.get('session');
  if(session === undefined){
    return (redirect('/login'));
  }else{
    return (redirect('/dashboard'));
  }
  // return(<Login></Login>)
};


Page.displayName = "P";
export default React.memo(Page);
