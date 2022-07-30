// importing required libraries and packages
import React from "react";
import "./Card.css";
import html2canvas from "html2canvas";

// dummy data for the card
const data = {
  name: "Satvik Singh",
  profession: "Software Developer",
  email: "satviksingh18@gmail.com",
  phone: "+91-9818091859",
  location: "New Delhi, India",
  website: "https://github.com/SatvikSingh"
};

const Card = () => {

  // function to export the card as a png image
  const share = async () => {
    // if there is no share function in navigator, then return
    if (!("share" in navigator)) {
      return;
    }

    // create a canvas element and render the card to it based on class provided
    const canvas = await html2canvas(document.querySelector(".share-content"));
    // create a blob from the canvas
    canvas.toBlob(async (blob) => {
      // create a files array containing the blob
      const files = [new File([blob], "image.png", { type: blob.type })];
      // share the files with a text message
      const shareData = {
        text: "Checkout my business card!",
        files,
      };
      // if the share function is available, then share the files
      if (navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err.name, err.message);
          }
        }
      } 
      // if the share function is not available, then alert user that sharing is not available
      else {
        console.warn("Sharing not supported", shareData);
      }
    });
  };

  return (
    <div>
      {/* Share Content */}
      <div className="share-content">
  
        {/* Business Card Front */}
        <div className="business-card">
          <div className="content">
            <div className="top">
              <div className="name text">{data.name}</div>
              <div className="profession text">{data.profession}</div>
            </div>
            <div className="bottom">
              <div className="left">
                <div className="email text">{data.email}</div>
                <div className="phone text">{data.phone}</div>
              </div>
              <div className="right">
                <div className="location text">{data.location}</div>
              </div>
            </div>
          </div>
          <div className="background">
            <div className="slice"></div>
          </div>
        </div>

        {/* Business Card Back */}
        <div className="business-card">
          <div className="content">
            <div className="top">
              <div className="name text">Website</div>
              <div className="email text">{data.website}</div>
            </div>
            <div className="bottom">
              <div className="left">
                <div className="email text">{data.email}</div>
                <div className="phone text">{data.phone}</div>
              </div>
              <div className="right">
                <div className="location text">{data.location}</div>
              </div>
            </div>
          </div>
          <div className="background">
            <div className="slice"></div>
          </div>
        </div>
      </div>

      {/* Share Button */}
      <div className="btn-wrap">
        <button className="button" onClick={share}>
          Share Image
        </button>
      </div>
    </div>
  );
};

export default Card;
