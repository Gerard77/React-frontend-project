import './App.css'
import SpaceshipList from './components/SpaceshipList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpaceshipDetail from './components/SpaceshipDetail';

function App() {

  return (
      <div className="row">
        <div className="column side invis"></div>
        <div className="column middle">
          <h2 className='rootTitle'> STAR WARS SPACESHIPS </h2>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<SpaceshipList/>}></Route>
                <Route path="/detail" element={<SpaceshipDetail/>}></Route>
            </Routes>
          </BrowserRouter>
          <footer className='footer' style={{ color: 'white' }}>
            All rights reserved to The Walt Disney Company
          </footer>
        </div>
        <div className="column side invis"></div>
      </div>
  );
}

export default App;
