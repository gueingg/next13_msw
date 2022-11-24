import React from "react";

const Head = () => {
  return (
    <>
      <title>Honors</title>
      <meta name="theme-color" content="#111827" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
};

Head.displayName = "Head";
export default React.memo(Head);
