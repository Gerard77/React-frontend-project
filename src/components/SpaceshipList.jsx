import { useEffect, useState } from 'react'
import axios from 'axios'
import Spaceship from './Spaceship'

function SpaceshipList(){
  const [data, setData] = useState({ results: [] });
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("effect called");
    const getData = async () => {
      console.log("waiting api");
      //const results = await axios("https://api.fbi.gov/wanted/v1/list");
      const results = await axios(`https://swapi.dev/api/starships/?page=${count+1}`);
      console.log(results.data);
      setData(results.data);
    };

  getData();
  
  return() => {
    console.log("cleaning");
  };
}, [count]);

  
return(
    <div className='main'>
      <div className='main_buttons'>      
        <button style={{width: 100, height: 25, fontSize: 15}} onClick={() => {console.log(count); count>0 ? setCount(prevCounter => prevCounter - 1) : null;}}> Page {count}</button>
        <button style={{width: 100, height: 25, fontSize: 15}} onClick={() => setCount(prevCounter => prevCounter + 1)}> Page {count+1}</button>
      </div>
      <div className='main_spaceships'>
        <ul className='spaceshipList'>
          {data.results.map((item) => 
            <li key={item.title} className='spaceshipListElement'>
              <Spaceship>{item}</Spaceship>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SpaceshipList;
