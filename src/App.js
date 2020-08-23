import React from 'react';
//import Home from './pages/home';
//import Profile from './pages/profile';
//import Skills from './pages/skill';
import Works from './pages/works';
import ButtonAppBar from './components/header';

function App() {
  return (
    <div>
      <ButtonAppBar />
        {/* <Home/> */}
      {/* <Profile/> */}
      {/* <Skills/> */}
      <Works/>
    </div>
  );
}

export default App;
