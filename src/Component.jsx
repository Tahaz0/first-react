import React from "react";


let bData = [
    {
      name : "Facebook",
      link : "https://www.facebook.com/",
      text : "Click here to enter facebook"
    },
    {
      name : "YOUTUBE",
      link : "https://www.youtube.com/",
      text : "Click here to enter YouTube"
    },
    {
      name : "GITHUB",
      link : "https://www.youtube.com/",
      text : "Click here to enter gitHub"
    }
]
// console.log(bData);

function Component(props) {
    // console.log(props);
    return (
        <div>
           <a href= {props.link} target = "_blank" >
             <button type="submit" style={{color:'red', padding: '12px 24px'}} > {props.name} </button>
           </a>
           <p style={{fontSize:'9px'}}> {props.text} </p>
        </div>
    );
}


export default Component;
export {bData};