import { useState } from "react";
export default function MainPage() {
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ x: "80%", y: "80%" });

  const handleZoom = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Toggle scale between 1 and 2 for zoom
    const newScale = scale === 1 ? 1.3 : 1;
    setScale(newScale);

    // Calculate new transform origin as a percentage
    const originX = (clickX / rect.width) * 100 + "%";
    const originY = (clickY / rect.height) * 100 + "%";
    setOrigin({ x: originX, y: originY });
  };

  return (
    <div className="zoom-container" onClick={handleZoom}>
      <div className="body-content">
        <img className="plus-top-left" src="./plus.svg" alt="plus"></img>
      </div>
      <img
        src="./map.png"
        alt="Zoomable"
        className="zoom-image"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: `${origin.x} ${origin.y}`,
          transition: "transform 1s ease-in-out",
        }}
      />
    </div>
  );
}
