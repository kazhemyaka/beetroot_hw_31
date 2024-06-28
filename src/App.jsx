import Header from "./components/Header/Header";
import Forecasts from "./components/Forecasts/Forecasts";
import Footer from "./components/Footer/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Forecasts />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
