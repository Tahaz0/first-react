import React from "react";


let bData = [
    {
      pic : "https://cdn.myanimelist.net/images/anime/1443/111830.jpg",
      title : "KINGDOM",
    },
    {
      pic : "https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
      title : "ATTACK ON TITAN",
    },
    {
     pic : "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      title : "DEATH NOTE",
    },
    {
     pic : "https://staticg.sportskeeda.com/editor/2021/10/8bbb3-16349088266046-1920.jpg",
      title : "NARUTO",
    },
    {
     pic : "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
     title : "VINLAND SAGA",
    },
    {
     pic : "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
      title : "HUNTER x HUNTER",
    },
];

function Component(props) {
  
    return (
    <div className="cards" style= {{ display: 'flex' }} >
      <div className="card">
        <img src= { props.pic } />
        <div className="card-info">
          <h4> { props.title } </h4>
          <a href="#">
            <button>WATCH NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
}


export default Component;
export {bData};