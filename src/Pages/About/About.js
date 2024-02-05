import React from 'react';
import { Container} from '@mui/material';
import SkillsToggle from '../../components/skillToggle/skillToggle';

import './About.css';


const About = () => {
  return (
    <Container className='font_text'>
        <div>
        <h1 className='aboutme'>About me</h1>
        <h3 className='aboutme_text'>
              I'm a proactive Master's student at the University of New South Wales, specializing in Artificial Intelligence. With a robust computer science background, I excel in crafting solutions at the nexus of technology and real-world challenges. My expertise spans web development, AI, and data science. Currently serving as Co-Vice President of the F1 Society at UNSW, I am a committed and results-oriented individual, blending academic rigor with hands-on project experience.</h3>
      </div>


      <SkillsToggle />
      

      
      
      
    </Container>
  );
};

export default About;
