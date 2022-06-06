import React from "react";
//import Logo from "../images/CR90-corvette.jpg";
import '../App.css'



/*function Person(props){
    return <div>{props.childern.title}</div>
}*/

function Spaceship(props){
    const imgSource = props.children.name.replace(/\s/g,'-');
    console.log(imgSource);

    return(
        <div className="spaceshipContainer">

            <a href="">
                <img src={require(`../images/${imgSource}.jpg`).default} className='spaceshipImage'/>
            </a>
            <span>
                <h1 key={props.children.name} className="spaceshipTitle">{props.children.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.children.manufacturer }}></div>
            </span>
        </div>
    );
}

export default Spaceship;