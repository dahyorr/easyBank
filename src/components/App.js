import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Landing from "./Landing";
import LatestArticles from "./LatestArticles";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Features />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
