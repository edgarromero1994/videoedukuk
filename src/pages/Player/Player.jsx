 
import ReactPlayer from 'react-player';
const Player = () => {

  return (

    <div>
          <ReactPlayer
          url=""
          width="100%"
          height="100%"
          controls=" "
          playing=""
          onEnded=""
        />
    </div>
  )
}

export default Player