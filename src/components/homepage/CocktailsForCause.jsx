import SectionHeader from "../../ui/SectionHeader";
import SipAndSupport from "/images/sip-n-support-logo.svg";

const CocktailsForCause = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-base  dark:brightness-100 text-black dark:text-white section-padding  grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
                <SectionHeader
                    center
                    heading={
                        <>
                            COCKTAILS FOR
                            <br /> A CAUSE
                        </>
                    }
                    paragraph={
                        <>
                            As part of our celebration, we pledge to
                            <br />
                            donate $1 for every Old Fashioned sold to
                            <br />
                            bar and restaurant workers in need.
                            <br />
                            Thanks to you, we've raised over
                            <br />
                            $600,000 since 2020.
                        </>
                    }
                    url="/join-our-cause"
                    ctaLabel="Learn More"
                    btnColor="burgundy"
                />

                <div className="flex justify-center">
                    <img
                        className="w-full max-w-75 md:max-w-100 dark:invert-100"
                        src={SipAndSupport}
                        alt="Sip and Support"
                    />
                </div>
            </div>
        </div>
    );
};

export default CocktailsForCause;
