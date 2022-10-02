import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import CelestialBodySelection from './Pages/CelestialBodySelection/CelestialBodySelection';
import GlobemapOfEvents from './Pages/GlobalmapOfEvents/GlobemapOfEvents';
import SelectedEvent from './Pages/SelectedEvent/SelectedEvent';

import './App.scss';


function App() {
  

  return (
    <div >
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/celestial-body-selection" element={<CelestialBodySelection />} />
            <Route path={"/:id"} element={ <GlobemapOfEvents /> } />
            <Route path="/:id/:event" element={ <SelectedEvent /> } />
            <Route path="*" element={ <div>ERROR</div>} />
      </Routes>
    </div>
  );
}

export default App;
