import React, { useState, useRef } from 'react';
import Banner from '../components/Banner/Banner';
import Nav from '../components/Nav/Nav';
import Features from '../components/Features/Features';
import ListadoVideo from '../components/ListadoVideo/ListadoVideo';
import Footer from '../components/Footer/Footer';
import Question from '../components/Question/Question';

const Home = () => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
  const bannerRef = useRef(null);

  const handleVideoSelect = (url) => {
    setSelectedVideoUrl(url);
    bannerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div ref={bannerRef}>
        <Banner videoUrl={selectedVideoUrl} />
      </div>
      <Features />
      <ListadoVideo onVideoSelect={handleVideoSelect} />
      <Question/>
      <Footer/>
    </>
  );
}

export default Home;