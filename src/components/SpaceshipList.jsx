import { useEffect, useState } from 'react'
import axios from 'axios'
import Spaceship from './Spaceship'
import { Link } from "react-router-dom";

function SpaceshipList(){
  const [data, setData] = useState({ results: [] });
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("effect called");
    const getData = async () => {
      console.log("waiting api");
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
      <div className='page_buttons'>      
        <button style={{width: 100, height: 25, fontSize: 15}} disabled={count>0 ? false : true} onClick={() => {console.log(count); count>0 ? setCount(prevCounter => prevCounter - 1) : null;}}> Page {count-1}</button>
        <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginRight: 20, marginLeft: 20}}>Page {count}</h4>
        <button style={{width: 100, height: 25, fontSize: 15}} disabled={count<3 ? false : true} onClick={() => count<3 ? setCount(prevCounter => prevCounter + 1) : null}> Page {count+1}</button>
      </div>
      <div className='main_spaceships'>
        <ul className='spaceshipList'>
          {data.results.map((item) => 
            <li key={item.title} className='spaceshipListElement'>
              <Link to={"/detail"} state={item} style={{textDecoration: 'none'}}><Spaceship>{item}</Spaceship></Link>
            </li>
          )}
        </ul>
      </div>
      <div className='page_buttons' style={{marginBottom: 40}}>      
        <button style={{width: 100, height: 25, fontSize: 15}} disabled={count>0 ? false : true} onClick={() => {console.log(count); count>0 ? setCount(prevCounter => prevCounter - 1) : null;}}> Page {count-1}</button>
        <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginRight: 20, marginLeft: 20}}>Page {count}</h4>
        <button style={{width: 100, height: 25, fontSize: 15}} disabled={count<3 ? false : true} onClick={() => count<3 ? setCount(prevCounter => prevCounter + 1) : null}> Page {count+1}</button>
      </div>
    </div>
  );
}

export default SpaceshipList;
