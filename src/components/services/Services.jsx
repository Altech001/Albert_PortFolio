import ScrollVelocity from "../scroll/scroll";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import Counter from "./Counter";
import MugModelContainer from "./mug/MugModelContainer";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import SpotlightCard from "./spotlight/spotlight";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Mobile Application Development",
    counter: 10,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Web Development",
    counter: 20,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Backend Development(FastAPI)",
    counter: 20,
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  
  return (
    <div className="services" ref={ref}>
      <div className="scroller1">
        <ScrollVelocity
          texts={['Trust The Process']}
          className="custom-scroll-text"
        />
      </div>
      
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          <span className="sTitle1">
            Projects
          </span>
          PROJECTS
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={listVariants}
              onClick={() => setCurrentServiceId(service.id)}
              className={`service-wrapper ${currentServiceId === service.id ? 'active' : ''}`}
            >
              <SpotlightCard className="service" spotlightColor="rgba(0, 229, 255, 0.2)">
                <div className="serviceIcon">
                  <img src={service.img} alt="" />
                </div>
                <div className="serviceInfo">
                  <h2>{service.title}</h2>
                  <h3>{service.counter} Projects</h3>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={33} text="Projects Completed" />
          <Counter from={0} to={20} text="Happy Clients" />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <MugModelContainer />
        ) : (
          <ConsoleModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;