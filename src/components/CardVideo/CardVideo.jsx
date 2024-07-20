import "./CardVideo.css";

const CardVideo = ({ video, onVideoSelect }) => {
  return (
    <div className='card' onClick={() => onVideoSelect(video.video)}>
      <img src={video.imagen} alt="" />
      <div className="details">
        <h6>{video.titulo}</h6>
         
        <div className="icon-video">
          {video.github && (
            <a href={video.github} target="_blank" className="fab fa-github icon">GitHub</a>
          )}
          <a href={video.video} target="_blank" className="fab fa-youtube icon icon-youtube">YouTube</a>
        </div>
      </div>
    </div>
  );
}

export default CardVideo;