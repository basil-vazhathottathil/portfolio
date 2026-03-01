import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import bgDark from '../assets/images/bg-dark.png';
import bgLight from '../assets/images/bg-light.png';

const greeting = "Hey there! 👋";
const name = "I'm Basil Vazhathottathil";
const subtitle = "Aspiring Software Engineer";

function Main({ mode }: { mode: string }) {
  const [headingText, setHeadingText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [phase, setPhase] = useState<'typing-greeting' | 'pause-greeting' | 'deleting-greeting' | 'typing-name' | 'typing-subtitle' | 'done'>('typing-greeting');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (phase === 'done') return;

    let timeout: NodeJS.Timeout;

    if (phase === 'typing-greeting') {
      timeout = setTimeout(() => {
        const next = charIndex + 1;
        setHeadingText(greeting.substring(0, next));
        setCharIndex(next);
        if (next === greeting.length) {
          setPhase('pause-greeting');
          setCharIndex(greeting.length);
        }
      }, 80);
    } else if (phase === 'pause-greeting') {
      timeout = setTimeout(() => {
        setPhase('deleting-greeting');
      }, 1200);
    } else if (phase === 'deleting-greeting') {
      timeout = setTimeout(() => {
        const next = charIndex - 1;
        setHeadingText(greeting.substring(0, next));
        setCharIndex(next);
        if (next === 0) {
          setPhase('typing-name');
          setCharIndex(0);
        }
      }, 40);
    } else if (phase === 'typing-name') {
      timeout = setTimeout(() => {
        const next = charIndex + 1;
        setHeadingText(name.substring(0, next));
        setCharIndex(next);
        if (next === name.length) {
          setPhase('typing-subtitle');
          setCharIndex(0);
        }
      }, 80);
    } else if (phase === 'typing-subtitle') {
      timeout = setTimeout(() => {
        const next = charIndex + 1;
        setSubtitleText(subtitle.substring(0, next));
        setCharIndex(next);
        if (next === subtitle.length) {
          setPhase('done');
        }
      }, 60);
    }

    return () => clearTimeout(timeout);
  }, [phase, charIndex]);

  const showHeadingCursor = phase !== 'typing-subtitle' && phase !== 'done';
  const showSubtitleCursor = phase === 'typing-subtitle';

  return (
    <div className="container">
      <div className="about-section">
        <motion.img
          key={mode}
          src={mode === 'dark' ? bgDark : bgLight}
          alt=""
          className="bg-image"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, -20, 0],
            y: [0, -15, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="image-wrapper">
          <img src={process.env.PUBLIC_URL + "/me.jpg"} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/basil-vazhathottathil" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/basil-vazhathottathil" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1 className="typing-text">{headingText}{showHeadingCursor && <span className="cursor">|</span>}</h1>
          <p className="typing-subtitle">{subtitleText}{showSubtitleCursor && <span className="cursor">|</span>}</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/basil-vazhathottathil" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/basil-vazhathottathil" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;