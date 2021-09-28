import HomeLayoutHOC from "./HOC/Home.HOC";
import Temp from "./Components/temp";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <HomeLayoutHOC path="/:type" exact component={Temp} />
    </div>
  );
}

export default App;