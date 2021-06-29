import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './scss/common.scss';

const generateString = length => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const StringContext = React.createContext();

function App() {
  const myString = generateString(5);
  return (
    <StringContext.Provider value={myString}>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </StringContext.Provider>
  );
}

export default App;
export { StringContext };
