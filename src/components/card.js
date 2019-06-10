import React from "react";

function Card(props) {


   return(
    <div>
      <ul>
        {props.characters.map(item => (
          <li key={item.id}>
            {item.name}<br></br>
            {item.image}
          </li>
        ))}
      </ul>
    </div>
    );
  }


export default Card;