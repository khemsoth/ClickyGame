import React from "react";

/*class Clicked extends Component {
  state = {
    clicked: false
  }
}*/
function Card(props) {

function handleClick(event) {
 // const {clicked} = event.target;
  console.log('button clicked');
  for(var i = 0; i < props.characters.length; i++) {
    var random = Math.floor(Math.random()*props.characters.length);
    console.log(random);
  };/*
      this.state({
      [clicked]: true
    });*/
}

   return(
    <div>
      <ul>
        {props.characters.map(item => (
          <button onClick= {handleClick}>
          <li key={item.id.toString()}>
            {item.name}<br></br>
            {item.image}
          </li>
          </button>
        ))}
      </ul>
    </div>
    );
}
export default Card;
