import React from "react";
import '../App.css'

//<div dangerouslySetInnerHTML={{ __html: props.children.manufacturer }}></div>
/*function Person(props){
    return <div>{props.childern.title}</div>
}*/

function Spaceship(props){
    const imgSource = props.children.name.replace(/\s/g,'-');
    console.log(imgSource);

    return(
        <div className="spaceshipContainer">
            <a href="">
                <img src={`../../images/${imgSource}.jpg`} className='spaceshipImage'/>
            </a>
            <span className="spaceshipSpan">
                <h2 key={props.children.name} className="spaceshipTitle">{props.children.name}</h2>
                <h4 style={{fontWeight: 'normal', margin: 0, color: 'white'}}>{props.children.manufacturer}</h4>
            </span>
        </div>
    );
}

export default Spaceship;