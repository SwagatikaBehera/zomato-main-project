import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

// Component
import Temp from "./Components/temp";

// Page
import Home from "./Page/Home";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/Delivery" exact />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC
        path="/restaurant/:id"
        exact
        component={RestaurantLayoutHOC}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/menu"
        exact
        component={RestaurantLayoutHOC}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={RestaurantLayoutHOC}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order"
        exact
        component={RestaurantLayoutHOC}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={RestaurantLayoutHOC}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={RestaurantLayoutHOC}
      />
    </>
  );
}

export default App;
