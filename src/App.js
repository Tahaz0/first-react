
import './App.css';
import Component, { bData } from "./Component";


function App() {
  return (
    // ************ 1st way starts *************

  //    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', gap:'2rem'}}>
  //      <Component
  //      name = "Facebook"
  //      link = "https://www.facebook.com/"
  //      text = "Click here to enter Facebook"
  //    />
  //    <Component
  //      name = "YOUTUBE"
  //      link = "https://www.youtube.com/"
  //      text = "Click here to enter YouTube"
  //    />
  //    <Component
  //      name = "GITHUB"
  //      link = "https://www.youtube.com/"
  //      text = "Click here to enter gitHub"
  //    />
  //    </div>
  // );
    // ************1st way end *************


    //************ 2nd way starts **************
    
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', gap:'3rem'}}>
      <Component
      name = {bData[0].name}
      link = {bData[0].link}
      text = {bData[0].text}
    />
    <Component
      name = {bData[1].name}
      link = {bData[1].link}
      text = {bData[1].text}
    />
    <Component
      name = {bData[2].name}
      link = {bData[2].link}
      text = {bData[2].text}
    />
    </div>
    );

    //************ 2nd way ends ****************
  }

export default App;
