import React from "react";
import "./Card.css";
import html2canvas from "html2canvas";

const data = {
  name: "Satvik Singh",
  profession: "Software Developer",
  email: "satviksingh18@gmail.com",
  phone: "+91-9818091859",
  location: "New Delhi, India",
  website: "https://github.com/SatvikSingh"
};

const Card = () => {
  const share = async () => {
    if (!("share" in navigator)) {
      return;
    }
    const canvas = await html2canvas(document.querySelector(".share-content"));
    canvas.toBlob(async (blob) => {
      const files = [new File([blob], "image.png", { type: blob.type })];
      const shareData = {
        text: "Checkout my business card!",
        files,
      };
      if (navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err.name, err.message);
          }
        }
      } else {
        console.warn("Sharing not supported", shareData);
      }
    });
  };

  return (
    <div>
      <div className="share-content">
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

      <div className="btn-wrap">
        <button className="button" onClick={share}>
          Share Image
        </button>
      </div>
    </div>
  );
};

export default Card;
