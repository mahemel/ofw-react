import { motion } from "motion/react";
const P = ({ children, className = "" }) => {
    const baseClasses =
        "text-sm sm:text-[21px] md:text-[13px] lg:text-base xl:text-[19px] 2xl:text-[21px]";

    return (
        <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            viewport={{ amount: 0.8 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className={`${baseClasses} ${className}`}
        >
            {children}
        </motion.p>
    );
};

export default P;
