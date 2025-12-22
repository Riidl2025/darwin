import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Edition5 from './Pages/Edition5/Edition5';
import Edition4 from './Pages/Edition4/Edition4';
import StartupSummit from './Pages/StartupSummit';
import Edition3 from './Pages/Edition3/Edition3';
import ResearchSymposium from './Pages/ResearchSymposium/index'
import Edition1 from './Pages/Edition1/Edition1';
import Edition2 from './Pages/Edition2/Edition2';

function App() {
  return (
    <div className= "w-full overflow-x-hidden">
    <Routes>
      <Route path="/" element={<Edition5 />} />
      <Route path="/edition5" element={<Edition5 />} />
      <Route path="/edition4" element={<Edition4 />} />
      <Route path="/edition4/startup_summit" element={<StartupSummit />} />
      <Route path="/edition3" element={<Edition3 />} />
      <Route path="/edition3/research_symposium" element={<ResearchSymposium />} />
      <Route path="/edition2" element={<Edition2 />} />
      <Route path="/edition1" element={<Edition1 />} />

    </Routes>
     </div>
  );
}

export default App;
