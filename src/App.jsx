import './App.css'
import SpaceshipList from './components/SpaceshipList';

function App(){
  
return(
  <div className="row">
    <div className="column side invis"></div>
    <div className="column middle">
        <h2 className='rootTitle'> STAR WARS SPACESHIPS </h2>
          <SpaceshipList></SpaceshipList>
        <footer className='footer' style={{color: 'white'}}>
            All rights reserved to The Walt Disney Company
        </footer>
    </div>
    <div className="column side invis"></div>
  </div>
  );
}

export default App;
