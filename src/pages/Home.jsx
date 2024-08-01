import React, { useState, useRef } from 'react';
import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import ListadoVideo from '../components/ListadoVideo/ListadoVideo';
import Footer from '../components/Footer/Footer';
import Question from '../components/Question/Question';

const Home = () => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const bannerRef = useRef(null);

  const handleVideoSelect = (url, playlist) => {
    setSelectedVideoUrl(url);
    setPlaylist(playlist);
    setCurrentVideoIndex(0);
    bannerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoEnd = () => {
    const nextIndex = currentVideoIndex + 1;
    if (nextIndex < playlist.length) {
      setSelectedVideoUrl(playlist[nextIndex].video);
      setCurrentVideoIndex(nextIndex);
    }
  };

  return (
    <>
      <div ref={bannerRef}>
        <Banner videoUrl={selectedVideoUrl} onVideoEnd={handleVideoEnd} videos={playlist} />
      </div>
      <Features />
      <ListadoVideo onVideoSelect={handleVideoSelect} />
      <Question />
      <Footer />
    </>
  );
}

export default Home;