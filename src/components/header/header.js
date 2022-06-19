import "./header.css";
import { format } from 'date-fns'
import { useState } from "react";


export const Header = () => {
    const [timeBlock, setTimeBlock] = useState(format(new Date(), "dd-MM-yyyy HH:mm:ss"));
  
    const pass = () => {
      const timeB = format(new Date(), "dd-MM-yyyy HH:mm:ss")
      setTimeBlock(timeB);
    }

    setInterval(pass, 1000);

    return (
    <nav>
        <img id="icon" src="https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Transparent-Picture.png" width="30px" height="50px" alt="motivation icon"/>
        <div id="timeBlock"> {timeBlock} </div>
    </nav>
    );
};