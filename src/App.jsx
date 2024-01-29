import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const height = 50;

  return (
    <div className="container">
      <Header height={height} />
      <Body />
      <Footer height={height} />
    </div>
  );
}

export default App;
