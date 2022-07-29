import React from "react";
import "./Card.css";

const data = {
  name: "Satvik Singh",
  profession: "Software Developer",
  email: "satviksingh18@gmail.com",
  phone: "+91-9818091859",
  location: "New Delhi, India",
};

const Card = () => {
  return (
    <div>
      <div class="business-card">
        <div class="content">
          <div class="top">
            <div class="name text">{data.name}</div>
            <div class="profession text">{data.profession}</div>
          </div>
          <div class="bottom">
            <div class="left">
              <div class="email text">{data.email}</div>
              <div class="phone text">{data.phone}</div>
            </div>
            <div class="right">
              <div class="location text">{data.location}</div>
            </div>
          </div>
        </div>
        <div class="background">
          <div class="slice"></div>
        </div>
      </div>
      <div id="container-button">
        <button class="share">
          <span class="circle" aria-hidden="true">
            <span class="icon share-icon"></span>
          </span>
          <span class="button-text">Share</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
