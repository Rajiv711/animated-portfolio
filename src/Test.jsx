import React from 'react'
import { motion } from 'framer-motion'

const Test = () => {


  const variants={
    visible:{opacity:1 ,scale:2},
    hidden:{opacity:0,scale:0.5},
  }

  return (
    <div className='course'>
       <motion.div className="box" 
       variants={variants}
       initial='hidden'
       animate='visible'
       transition={{duration:2,delay:1}}
       ></motion.div> 
    </div>
  )
}

export default Test