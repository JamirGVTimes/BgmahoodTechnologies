import React from "react";
function ContactCard(props){
    console.log(props);
    return(
        <div className="card1">
            <img src={props.imgUrl} alt={props.alterna}/>
            <h3> {props.Title} </h3>
            <p className="pricer">PRICE: <code> {props.price} UGX</code></p>
            <p className="not1">{props.notes}</p>
            <button className="view1">View More...</button> <button className="cont1">Contact Us</button>
        </div>
    );
}
export default ContactCard;