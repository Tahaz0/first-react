import React from "react";
import { Link } from "react-router-dom";
let card = {
    width: '260px',
    height: '350px',
    backgroundColor: '#c04',
    borderRadius: '20px',
    margin: '0 auto',
    marginBottom: '20px',
    padding: '8px, 12px',
    textAlign: 'center'
};

function Watched({ item }) {
    return (
        <div className="cards" >
            <div style={card}>
                <div className="card-info">
                    <h1> {item.id} </h1>
                    <h3> {item.title} </h3>
                    <p> {item.body} </p>
                    <Link to={`/about/${item.id}`}><button>Next</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Watched;