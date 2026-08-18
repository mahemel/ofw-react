import GlassBg from "/images/home-hero-top.jpg";
const GlassEffect = ({ side = "left", className = "", bg = GlassBg }) => {
    const sideClass =
        side === "top"
            ? "after:top-0 after:left-0 after:w-full after:h-0.5"
            : side === "right"
              ? "after:top-0 after:right-0 after:w-0.5 after:h-full"
              : "after:top-0 after:left-0 after:w-0.5 after:h-full";

    return (
        <div
            style={{
                "--glass-bg": `url(${bg})`,
            }}
            className={`
                absolute inset-0
                bg-[linear-gradient(0deg,#fcb33c_-12.35%,rgba(252,179,60,0)_105.96%),var(--glass-bg)]
                bg-position-[center_top]
                bg-size-[100%_auto]
                bg-no-repeat

                before:content-['']
                before:absolute
                before:inset-0
                before:backdrop-blur-[15px]

                after:content-['']
                after:absolute
        
                after:bg-white
                after:blur-[3px]

                ${sideClass}
                ${className}
            `}
        />
    );
};

export default GlassEffect;
