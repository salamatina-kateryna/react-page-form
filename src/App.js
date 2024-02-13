import "./assets/styles/custom-bootstrap.scss";
import "./App.css";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
      </main>
    </>
  );
}

export default App;
