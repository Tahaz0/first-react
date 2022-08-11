import React from 'react';
import './App.css';
import './index.css';
import Component, {bData} from "./Component";


function App() {

  return (
  <div style={{display:'flex', flexWrap:'wrap', gap: '2rem', justifyContent: 'center', margin:'0 auto', width:'80%' } }>
    
    {/* <Component
      pic = {bData[1].pic}
      title = {bData[1].title}
    />
    <Component
      pic = {bData[2].pic}
      title = {bData[2].title}
    />
    <Component
      pic = {bData[3].pic}
      title = {bData[3].title}
    />
    <Component
      pic = {bData[4].pic}
      title = {bData[4].title}
    />
    <Component
      pic = {bData[5].pic}
      title = {bData[5].title}
    /> */}

    {bData.map((val)=> {
      return(
    <Component
      pic = {valu.pic}
      title = {valu.title}
    />
  );
    })}
</div>

)
   
};

export default App;
