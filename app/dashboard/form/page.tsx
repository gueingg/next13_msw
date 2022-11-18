import React from 'react';
import Button from './Button';


const Page = () => {
  
  return(<>
  <div>
  <h2>폼</h2>
  
  <Button>{<div>알림</div>}</Button>
  </div>
  </>)
}
Page.displayName = "P";
export default React.memo(Page);