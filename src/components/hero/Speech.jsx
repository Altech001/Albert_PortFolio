import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "I’ll use dirty tricks for two reasons. One is, if it’s really going to give me a performance improvement.",
            1000,
            " Or sometimes just for pure pleasure. In any case, I document it; I don’t just put it in there. ",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="https://avatars.githubusercontent.com/u/164334496?s=400&u=be787db91964c43a85cee0de402a9883ae655f32&v=4" alt="" />
    </motion.div>
  );
};

export default Speech;
