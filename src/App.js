import React from 'react';
// import Components and Pages
import Home from './pages/Home';
import Nav from './components/Nav';
// import styles
import GlobalStyles from './components/GlobalStyles';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        {/* <Route path={["game/:id", "/"]}> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div >
  );
}

export default App;
