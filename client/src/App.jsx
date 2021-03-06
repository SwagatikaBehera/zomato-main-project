import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import PaymentLayoutHOC from "./HOC/Payment.HOC";

// Component
import Temp from "./Components/temp";

// Page
import Home from "./Page/Home";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";
import Reviews from "./Page/Restaurant/Reviews";
import Menus from "./Page/Restaurant/Menu";
import Photos from "./Page/Restaurant/Photos";
import Checkout from "./Page/Checkout";
import redirect from "./Page/Restaurant/Redirect";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/Delivery" />
      </Route>

      <Route path="/restaurant/:id" exact component={redirect} />

      <HomeLayoutHOC path="/:type" exact component={Home} />

      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order"
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={Reviews}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/menu"
        exact
        component={Menus}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={Photos}
      />
      <PaymentLayoutHOC path="/Checkout/Orders" exact component={Checkout} />
    </>
  );
}

export default App;
