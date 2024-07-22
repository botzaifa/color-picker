// import React, {useState} from "react"
// import '../styles/ColorPicker.css' 




// function ColorPicker() {
//     const [color, setColor] = useState("#FFFFFF");

//     function handleColorChange(event){
//         setColor(event.target.value);
//     }

//     return(
//         <div className="color-picker-container"> 
//             <h1 className="h1-color-picker">Color Picker</h1>
//             <div className="color-display" style={{backgroundColor: color}}>
//                 <p>
//                     Selected Color: {color}
//                 </p>
//             </div>
//             <label>Select a Color</label>
//             <input
//                 type="color" 
//                 value={color}
//                 onChange={handleColorChange}
//             />
//         </div>
//     );
// }


// export default ColorPicker

import React, { useState } from "react";
import "../styles/ColorPicker.css";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  const [history, setHistory] = useState([]);

  function handleColorChange(event) {
    const newColor = event.target.value;
    setColor(newColor);
    setHistory([newColor, ...history]);
  }

  function hexToRGB(hex) {
    let bigint = parseInt(hex.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className="color-picker-container">
      <h1 className="h1-color-picker">Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
        <p>RGB: {hexToRGB(color)}</p>
      </div>
      <label>Select a Color</label>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
      />
      <div className="color-history">
        <h2>Color History</h2>
        <ul>
          {history.slice(0, 5).map((col, index) => (
            <li key={index} style={{ backgroundColor: col }}>
              {col}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ColorPicker;
