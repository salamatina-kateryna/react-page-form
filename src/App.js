import "./App.css";
import "./assets/styles/custom-bootstrap.scss";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import List from "./components/List/List";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <List />
      </main>
    </>
  );
}

export default App;
