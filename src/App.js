import React from 'react';
//import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import User from './Components/User/User';
//import Loading from './Components/Loading/Loading';
import Info from './Components/Info/Info';
import { GlobalStyle } from "./style/global";

function App() {

  return (
    <div className="main">
      <GlobalStyle />
      <Header />
      <User />
      <Info />
      <Projects />
    </div>
  );
}

export default App;
