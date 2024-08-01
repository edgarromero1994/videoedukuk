import React, { useEffect, useState, useRef } from "react";
import CardVideo from "../CardVideo/CardVideo";
import { fetchVideos } from "../../pages/Api/api";
import "./ListadoVideo.css";

const ListadoVideo = ({ onVideoSelect }) => {
  const scrollRef = useRef({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
    };
    getVideos();
  }, []);

  const categorizedVideos = videos.reduce((acc, video) => {
    if (!acc[video.categoria]) {
      acc[video.categoria] = [];
    }
    acc[video.categoria].push(video);
    return acc;
  }, {});

  const scroll = (categoria, direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current[categoria].scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className='video-list'>
      {Object.keys(categorizedVideos).map(categoria => (
        <div className="category-section" key={categoria}>
          <h2>{categoria}</h2>
          <div className="scroll-buttons">
            <button className="scroll-button left" onClick={() => scroll(categoria, "left")}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="scroll-button right" onClick={() => scroll(categoria, "right")}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="box-card" ref={el => scrollRef.current[categoria] = el}>
            {categorizedVideos[categoria].map(video => (
              <CardVideo 
                key={video.id} 
                video={video} 
                onVideoSelect={() => onVideoSelect(video.video, categorizedVideos[categoria])} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListadoVideo;