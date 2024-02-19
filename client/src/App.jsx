import Nav from "./components/nav/Nav";
import Header from "./components/header";
import { AsideTop, AsideBottom } from "./components/asides/";
import Footer from "./components/footer";
import Voting from "./components/Voting";

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
