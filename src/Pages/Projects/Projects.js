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
                    description="An in-depth study comparing static and dynamic embeddings in dialogue summarization was conducted using the Seq2Seq, BART, and T5 models. 
                    Achieved significant enhancements, fine-tuning BART for a notable ROUGE-1 score increase from 0.2866 to 0.4215, surpassing a custom Seq2Seq model. 
                    Identified critical strengths and weaknesses in NLP models, emphasising the difficult balance between computational resources and the precision of context-aware embeddings required for coherent and accurate summaries " />
                </div>
            <div className="skill-card_project">
                <ProjectCard title="Image classification of ELPV datasets"
                    description="Classified defects in Solar Cells from ELPV dataset using EigenCell, KNN+SIFT, and MobileNetV2 models where
                    MobileNetV approach, outperformed excelling in accuracy and robustness. MobileNetV2 excels in defect prediction, outperforming KNN and EigenCell. Superior accuracy, feature extraction, and F1 scores validate its precision"/>
                </div>
            <div className="skill-card_project">
                <ProjectCard title="My Portfolio Website"
                    description="This portfolio website is meticulously crafted using React and JavaScript for dynamic functionality. CSS styling and Material UI ensure an aesthetically pleasing design. Hosted on Vercel, the site boasts seamless performance, efficient navigation, and a visually engaging presentation of projects and skills, showcasing my expertise and creativity."/>
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
