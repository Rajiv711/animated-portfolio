import { motion } from "framer-motion";
import "./Hero.scss";
import React from "react";

const textVariants ={
  initial:{
    opacity:0,
    x:-500,
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
};



const sliderVariants ={
  initial:{
    x:0,
  },
  animate:{
    x:'-220%',
    transition:{
      repeat:Infinity,
      repeatType:'mirror',      
      duration:20,
    },
  },
};




const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate' >
          <motion.h2  variants={textVariants} >RAJIV MOHITE</motion.h2>
          <motion.h1  variants={textVariants} >Web developer and UI designer</motion.h1>
          <motion.div className="buttons"  variants={textVariants} >
            <motion.button  variants={textVariants} >See the Latest works</motion.button>
            <motion.button  variants={textVariants} >Contact Me</motion.button>
          </motion.div >
          <motion.img   variants={textVariants} animate='scrollButton' src="scroll.png" alt="scroll button" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>
        Writer content creator Influencor
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero Image" />
      </div>
    </div>
  );
};

export default Hero;
