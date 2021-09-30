import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

//Pages
import Home from "./pages/Home";

//tempo
import Temp from "./Components/temp";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect, Route } from "react-router";


function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC path="/Restaurant/:id" exact component={Temp} />
      <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Temp} />
      <RestaurantLayoutHOC path="/Restaurant/:id/order-online" exact component={Temp} />
      <RestaurantLayoutHOC path="/Restaurant/:id/menu" exact component={Temp} />
      <RestaurantLayoutHOC path="/Restaurant/:id/reviews" exact component={Temp} />
      <RestaurantLayoutHOC path="/Restaurant/:id/photos" exact component={Temp} />
    </div>
  );
}

export default App;