const P = ({ children, className = "" }) => {
    const baseClasses =
        "text-sm sm:text-[21px] md:text-[13px] lg:text-base xl:text-[19px] 2xl:text-[21px]";

    return <p className={`${baseClasses} ${className}`}>{children}</p>;
};

export default P;
