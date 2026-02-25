import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Background.css';

const Background = () => {
    return (
        <div className="background-wrapper">
            <div className="mesh-gradient"></div>
            <motion.div
                className="blob blob-1"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="blob blob-2"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="blob blob-3"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <div className="noise-overlay"></div>
        </div>
    );
};

export default Background;
