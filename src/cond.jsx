import React from "react";

const isLoggedIn=true;
function Cond({ number }) {
  if (number==3) {
    return <h1>The number is correct.</h1>;
  } else {
    return <h1>Wrong Number.</h1>;
  }
}

export default Cond;
