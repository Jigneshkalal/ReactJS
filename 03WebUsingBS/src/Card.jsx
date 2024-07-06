import React from "react";

const Card = ({ title, about, Button,imgsrc,buttonColor}) => {
  return (
    <div>
      <div className="card" style={{width: '18rem'}}>
      <img src={imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{about}</p>
          <a href="#" className={`btn ${buttonColor}`}>
          {Button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
