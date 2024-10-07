import React, { useState } from "react";
import "./Videos.css"; // Include the CSS for styling and animations
import d1 from "./../../assets/Events/fresher.jpg";
import d2 from "./../../assets/Events/Agni.jpeg";
import d3 from "./../../assets/Events/Techofes.jpg";

const imagesData = [
  {
    id: 1,
    img: d1, // Replace with your image URLs
    videoId: "qpHwxhxc5Qc", // Replace with your YouTube video IDs
    name: "Fresher's Day", // Event name
  },
  {
    id: 2,
    img: d2, // Replace with your image URLs
    videoId: "pAe-Mtt_VyY", // Replace with your YouTube video IDs
    name: "Agni", // Event name
  },
  {
    id: 3,
    img: d3, // Replace with your image URLs
    videoId: "Z7zIM7vLFgw", // Replace with your YouTube video IDs
    name: "Techofes", // Event name
  },
];

const Videos = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handlePlayClick = (videoId) => {
    setPlayingVideo(videoId);
  };

  const handleMouseMove = (e, index) => {
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } =
      e.currentTarget;
    const xVal = e.clientX - (offsetLeft + offsetWidth / 2);
    const yVal = e.clientY - (offsetTop + offsetHeight / 2);
    const rotateX = (yVal / offsetHeight) * 10; // Adjust rotation factor as needed
    const rotateY = -(xVal / offsetWidth) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="videos">
      <h2 className="gallery-title">Gallery</h2> {/* Centered title */}
      <div className="images-container">
        {" "}
        {/* Flex container for horizontal layout */}
        {imagesData.map((image) => (
          <div
            key={image.id}
            className="image-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="image-title">{image.name}</div> {/* Event title */}
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="image"
            />{" "}
            {/* Image */}
            <div
              className={`overlay ${
                playingVideo === image.videoId ? "show-video" : ""
              }`}
            >
              <button
                className="overlay-button"
                onClick={() => handlePlayClick(image.videoId)}
              >
                Play Now
              </button>
              {playingVideo === image.videoId && (
                <iframe
                  className="video-iframe"
                  src={`https://www.youtube.com/embed/${image.videoId}?autoplay=1`}
                  title={`Video ${image.id}`}
                  allow="autoplay; encrypted-media"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
