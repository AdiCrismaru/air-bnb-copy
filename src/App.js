import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const offers = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Nav />
      <div className="offers-list">{offers}</div>
      <button type="button" className="map">
        <span>
          Show map <FontAwesomeIcon icon={faMap} className="map-icon" />
        </span>
      </button>
      <Footer />
    </div>
  );
}

export default App;
