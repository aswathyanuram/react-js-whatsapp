import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Status from "./components/Status";

function App() {
  const statusHeight = 10;
  const height = 50;

  return (
    <div className="container">
      <Status height={statusHeight} />
      <Header height={height} />
      <Body />
      <Footer height={height} />
    </div>
  );
}

export default App;
