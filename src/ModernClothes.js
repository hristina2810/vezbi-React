import React from 'react';



export function ModernClothes(props){
    console.log(props);
    return(
        <div id="modern-clothes">
           <p>Kind: Dress {props.kind}</p>
            <p>Size: 38 {props.size}</p>
            <p>Color:red {props.color} </p>
              <br/>
            <p>Kind: T-Shirt {props.kind}</p>
            <p>Size: 36 {props.size}</p>
            <p>Color: blue {props.color}</p>
            <br/>
            <p>Kind: Trousers {props.kind}</p>
            <p>Size: 42 {props.size}</p>
            <p>Color: yellow {props.color}</p> 
            {props.size >40 ? <p>Dostapno</p> : <p><b>It's not <em>AVAILABLE</em></b></p>}
            
            </div>
            
    )}