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
                <h2 className="text-3xl font-bold mb-4 uppercase">{heading}</h2>
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
