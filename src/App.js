import React from 'react';
import { GlobalStyle } from "./style/global";
import { ContextStorage } from './context/GitHubContext';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';

function App() {

  return (
    <ContextStorage>
      <GlobalStyle />
      <div className="main">
        <Header />
        <Main />
      </div>
    </ContextStorage>
  );
}

export default App;
