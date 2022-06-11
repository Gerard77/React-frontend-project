import { useLocation, useNavigate, Link } from "react-router-dom";

function SpaceshipDetail(){
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const state = location.state;
    const imgSource = state.name.replace(/\s/g,'-');

    return(
        <div className="spaceshipContainer">
            <a href="">
                <img src={`../../images/${imgSource}.jpg`} className='spaceshipImage'/>
            </a>
            <span className="spaceshipSpan">
                <h2 key={state.name} className="spaceshipTitle">{state.name}</h2>
                <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginBottom: 10}}>Manufacturer: {state.manufacturer}</h4>
                <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginBottom: 10}}>Cost: {state.cost_in_credits} credits</h4>
                <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginBottom: 10}}>Length: {state.length} m</h4>
                <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginBottom: 10}}>Crew: {state.crew}</h4>
                <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginBottom: 10}}>Passengers: {state.passengers}</h4>
                <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginBottom: 10}}>Cargo Capacity: {state.cargo_capacity} l</h4>
                <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginBottom: 10}}>Consumables: {state.consumables}</h4>
                <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginBottom: 10}}>Hyperdrive rating: {state.hyperdrive_rating}</h4>
                <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginBottom: 10}}>MGLT: {state.MGLT}</h4>
                <h4 style={{fontWeight: 'normal', margin: 0, color: 'white', marginBottom: 10}}>Starship class: {state.starship_class}</h4>
                <button style={{width: 100, height: 25, fontSize: 15, marginTop: 20}} onClick={() => navigate(-1)}> Go back</button>
            </span>
        </div>
    );
}

export default SpaceshipDetail;