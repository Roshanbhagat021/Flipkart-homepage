import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Deals from "./components/Deals";

function App() {
  return (
    <>
      <div className="relative bg-[#F0F5FF] overflow-hidden">
        <Navbar />
        <Categories/>
        <Banner/>
        <Deals/>

      </div>
    </>
  );
}

export default App;
