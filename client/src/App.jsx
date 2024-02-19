import Nav from "src/components/Nav/";
import Header from "src/components/Header";
import { AsideTop, AsideBottom } from "./components/Asides/";
import Footer from "src/components/Footer";
import Voting from "src/components/Voting";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <div className="max-centered">
        <AsideTop />
        <Voting />
        <AsideBottom />
        <Footer />
      </div>
    </div>
  );
}

export default App;
