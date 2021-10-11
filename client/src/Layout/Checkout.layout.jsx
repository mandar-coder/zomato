import React from "react";

// components
import CheckoutNavbar from "../Components/Navbar/CheckoutNavbar";

function CheckoutLayout(props) {
  return (
    <>
      <CheckoutNavbar />
      <div className="container mx-auto px-4 lg:px-20">{props.children}</div>
    </>
  );
}

export default CheckoutLayout;