import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, .interactive')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                    scale: isHovering ? 2 : 1,
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
            />
            <motion.div
                className="cursor-outline"
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.3 : 0.1,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.8 }}
            />
        </>
    );
};

export default CustomCursor;
