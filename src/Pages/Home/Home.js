import React from 'react';
import { Container  } from '@mui/material';
import { GitHub,LinkedIn } from '@mui/icons-material';
import myFace from './face.jpg';
import TypewriterEffect from './Typewriter';
import AnimatedProfileImage from './Animatedprofile';
import './Home.css';

const Home = () => {

  return (
    <Container className='font_text'>
      <div className='font_upper_2' >
        <TypewriterEffect />
        {/* <h3 className='font_upper'>Hello, I'm PRATYUSH PANDA</h3> */}
      </div>
      <div className="face">
        {/* Your image goes here */}
        {/* <img src={myFace} alt="My face" /> */}
        <AnimatedProfileImage imageSrc={myFace} />
      </div>
      <div>
        <h3>A web developer exploring the realms of AI, fueled by newfound passion and curiosity.</h3>
        <h3>I think outside the box and face challenges with enthusiasm and determination.</h3>
      </div>

      <div variant="contained" className="custom-button" >
        <a href="https://www.linkedin.com/in/pratyush-panda-94b855192/?originalSubdomain=au" className="custom-link-button">
          <div className="logo">
            < LinkedIn fontSize='28px' />
          </div>
          LinkedIn
        </a>
      </div>
      <div variant="contained" className="custom-button" >
        <a href="https://github.com/pratyush-okay" className="custom-link-button">
          <div className='logo'>
            <GitHub fontSize='28px' />
          </div>

        Github
        </a>
      </div>
      

      
    </Container>
  );
};

export default Home;
