import { motion } from "motion/react";
import LinkGhost from "./LinkGhost";
import P from "./P";

const SectionHeader = ({
    center = false,
    heading,
    paragraph,
    url,
    ctaLabel,
    btnColor,
    className = "",
}) => {
    return (
        <section className={`relative ${center ? "text-center" : ""}`}>
            {heading && (
                <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    viewport={{ amount: 0.8 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-4 uppercase"
                >
                    {heading}
                </motion.h2>
            )}

            {paragraph && (
                <P className={url && ctaLabel && btnColor && "mb-6"}>
                    {paragraph}
                </P>
            )}

            {url && ctaLabel && btnColor && (
                <LinkGhost
                    path={url}
                    label={ctaLabel}
                    color={btnColor}
                    className={className}
                />
            )}
        </section>
    );
};

export default SectionHeader;
