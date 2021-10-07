import React from "react";
import { Route } from "react-router-dom";

// Layout
import PaymentLayout from "../Layout/Payment.Layout";

const PaymentLayoutHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <PaymentLayout>
            <Component {...props} />
          </PaymentLayout>
        )}
      />
    </>
  );
};

export default PaymentLayoutHOC;
