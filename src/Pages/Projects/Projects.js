import React, { useState } from 'react';
import { Container, TextField, Button  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SkillsToggle from '../../components/skillToggle/skillToggle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';


const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState(''); 

  return (
    <Container className='font_text'>
        <div>
            <h1 className='aboutme'>My Projects</h1>
        </div>
        <div className="skills-container_project">
            <div className="skill-card_project">
                <ProjectCard title="Comparative Analysis of Abstractive Dialogue Summarisation Techniques"
                    description="We evaluated abstractive summarization models in NLP, with a focus on dialogue summarising. A Seq2Seq model is
                    compared to modern transformers such as BART and T5, demonstrating BART’s greater ability to capture dialogue
                    subtleties. We also created a custom transformer, which did not perform effectively. " />
                </div>
            <div className="skill-card_project">
                <ProjectCard title="Image classification of ELPV datasets"
                    description="Classified defects in Solar Cells from ELPV dataset using EigenCell, KNN+SIFT, and MobileNetV2 models where
                    MobileNetV approach, outperformed excelling in accuracy and robustness"/>
                </div>
            <div className="skill-card_project">
                <ProjectCard title="My Portfolio Website"
                    description="Fully React based personal portfolio with animations and styled components"/>
                </div>
            <div className="skill-card_project">
                <ProjectCard title="Distributed City Survelliance System"
                    description="Developing a distributed surveillance system leveraging human-AI collaboration to detect pre-crime signals, enhancing
                    public safety, and aiding law enforcement with the use of TensorFlow and React Native"/>
                </div>
            
    </div>    
    </Container>
  );
};

export default Home;
