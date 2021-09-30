import HomeLayoutHOC from "./HOC/Home.HOC";

//Pages
import Home from "./pages/Home";

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
    </div>
  );
}

export default App;