import Header from "./components/Header/Header";
import Forecasts from "./components/Forecasts/Forecasts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Forecasts />
      </main>
      <Footer />
    </>
  );
}

export default App;
