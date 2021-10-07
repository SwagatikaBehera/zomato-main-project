import React from "react";

// Component
import PaymentNavbar from "../Components/Navbar/PaymentNavbar";

const PaymentLayout = (props) => {
  return (
    <>
      <PaymentNavbar />
      <div className="container mx-auto md:px-4 lg:px-52">{props.children}</div>
    </>
  );
};

export default PaymentLayout;
