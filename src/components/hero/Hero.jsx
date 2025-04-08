import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense, useEffect } from "react";
import ComputerModelContainer from "../services/computer/ComputerModelContainer";
import RotatingText from "../rotatingtext/rotatingtext";
import TrueFocus from "./Truefocus/truefocus";
import Lanyard from '../Lanyard/Lanyard'

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  // Parallax effect for background
  useEffect(() => {
    const handleMouseMove = (e) => {
      const bg = document.querySelector('.bg');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      bg.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <div>
          <motion.h1
            initial={{ y: -90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", damping: 12 }}
            className="hTitle"
          >
            Hey<span>.</span>
            <RotatingText
              texts={['Its', 'Me', 'Abaasa', 'Albert!']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 10 }}
              exit={{ y: "-45%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 100 }}
              rotationInterval={2000}
            />
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <RotatingText
              texts={['React', 'Bits', 'Is', 'Cool!']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg rotating-text"
              staggerFrom={"last"}
              initial={{ y: "10%" }}
              animate={{ y: 10 }}
              exit={{ y: "-100%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.h2>
        </div>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.h2 variants={awardVariants}>
            <TrueFocus
              sentence="Am Albert"
              manualMode={false}
              blurAmount={5}
              borderColor="black"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </motion.h2>
          <motion.p variants={awardVariants}>
            Seasoned Backend, Flutter & React Mobile Application Developer with a focus on creating delightful user experiences.
          </motion.p>
          {/* <motion.div variants={awardVariants} className="awardList">
            <motion.img
              variants={awardVariants}
              src="/award1.png"
              alt="Award 1"
              whileHover={{ scale: 1.2, rotate: 5 }}
            />
            <motion.img
              variants={awardVariants}
              src="/award2.png"
              alt="Award 2"
              whileHover={{ scale: 1.2, rotate: -5 }}
            />
            <motion.img
              variants={awardVariants}
              src="/award3.png"
              alt="Award 3"
              whileHover={{ scale: 1.2, rotate: 5 }}
            />
          </motion.div> */}
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5, 0], opacity: [0.7, 1, 0.7] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll"
          whileHover={{ scale: 1.1 }}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1.5"
            />
            <motion.path
              animate={{ y: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="/" aria-label="Instagram">
            <img src="/instagram.png" alt="Instagram" />
          </motion.a>
          <motion.a variants={followVariants} href="/" aria-label="Facebook">
            <img src="/facebook.png" alt="Facebook" />
          </motion.a>
          <motion.a variants={followVariants} href="/" aria-label="YouTube">
            <img src="/youtube.png" alt="YouTube" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">LET'S CONNECT</div>
          </motion.div>
        </motion.div>
        
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="certificate"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/certificate.png" alt="Certificate" />
          <div>
            FLUTTER DEV
            <br />
            PYTHON BACKEND DEV
            <br />
            DEV`Ops
          </div>
        </motion.div>
        {/* CONTACT BUTTON */}
        <motion.a
          href="/#contact"
          className="contactLink"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <defs>
                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00c6ff" />
                  <stop offset="100%" stopColor="#0072ff" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="black" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Let's </textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="40%">
                  Connect •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                fill="none"
                stroke="#ccc"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3D Background */}
        <Canvas>
          <Suspense fallback={null}>
            <Shape />
          </Suspense>
        </Canvas>
        {/* 3D Model */}
        <div className="hImg">
          <ComputerModelContainer />
        </div>
      </div>
      {/* <Lanyard position={[0, 1, 20]} gravity={[0, -40, 0]} /> */}
    </div>
  );
};

export default Hero;