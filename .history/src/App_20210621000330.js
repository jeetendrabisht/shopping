import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './scss/common.scss';

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
