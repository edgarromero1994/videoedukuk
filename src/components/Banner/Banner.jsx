import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import "./Banner.css";

const Banner = ({ videoUrl, onVideoEnd, videos }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handleVideoClick = (video) => {
    setPlayingVideoId(video.id);
    onVideoEnd(video.video);
  };

  return (
    <div className='banner'>
      {videoUrl ? (
        <>
          <div className="player-container">
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              controls
              playing
              onEnded={onVideoEnd}
            />
          </div>
          <div className="video-list-container">
            {videos.map(video => (
              <div
                key={video.id}
                className={`video-item ${playingVideoId === video.id ? 'playing' : ''}`}
                onClick={() => handleVideoClick(video)}
              >
                <img src={video.imagen} alt={video.titulo} />
                <p>{video.titulo}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="text-container">
            <span>Hola Soy, </span>
            <h1>Edgar Romero Cuc</h1>
            <p>Desbloquea tu potencial en programación con nuestros cursos exclusivos de JavaScript. Aprende con ejercicios prácticos y videos detallados diseñados para todos los niveles.</p>

            <div className="container-banner-btn">
              <i className="fab fa-whatsapp icon">Whatsapp</i>
              <i className="fab fa-youtube icon icon-youtube">Youtube</i>
            </div>
          </div>

          <div className="image-container">
            <img src="/foto.png" alt="" />
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;