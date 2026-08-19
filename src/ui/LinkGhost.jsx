import { motion } from "motion/react";
import { NavLink } from "react-router";

const LinkGhost = ({ path, color, label, className = "" }) => {
    const colors = {
        white: "text-white border-white hover:bg-white hover:text-black",
        black: "text-black border-black hover:bg-black hover:text-white",
        burgundy:
            "text-burgundy border-burgundy hover:bg-burgundy hover:text-white",
    };

    return (
        <motion.NavLink
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
            }}
            transition={{ ease: "easeInOut", duration: 1 }}
            to={path}
            className={`block mx-auto h-[2.6em] leading-[calc(2.6em-4px)] max-w-fit text-base py-0 px-[1.5em] text-center relative font-bold cursor-pointer rounded-full border-2 min-w-[10em] transition-all duration-300 uppercase  ${colors[color]} ${className}`}
        >
            {label}
        </motion.NavLink>
    );
};

export default LinkGhost;
