import './App.css'
import SpaceshipList from './components/SpaceshipList';

function App(){
  
return(
  <div className="row">
    <div className="column side invis"></div>
    <div className="column middle">
        <h2 className='rootTitle'> STAR WARS SPACESHIPS </h2>
          <SpaceshipList></SpaceshipList>
        <footer className='footer'>
            All rights reserved Gerard Masip, 2022
        </footer>
    </div>
    <div className="column side invis"></div>
  </div>
  );
}

export default App;
