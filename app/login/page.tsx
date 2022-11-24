import React from 'react';
import Login from '../Components/login/login';

const Page = () => {
  return(<Login></Login>)
}
Page.displayName = "P";
export default React.memo(Page);