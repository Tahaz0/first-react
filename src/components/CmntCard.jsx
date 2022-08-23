import { React } from "react";

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

const CmntCard = ({ item }) => {

    return (
        <div className="cards" >
            <div style={card}>
                <div className="card-info">
                    <h2> {item.name} </h2>
                    <h3> {item.email} </h3>
                    <p> {item.body} </p>
                </div>
            </div>
        </div>
    );
};

export default CmntCard;