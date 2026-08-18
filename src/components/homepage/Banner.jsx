import HomeHero from "/images/home-hero.jpg";
import HomeHeroMob from "/images/home-hero-mob.jpg";
import P from "../../ui/P";
import GlassEffect from "../../ui/GlassEffect";
import LinkGhost from "../../ui/LinkGhost";
const Banner = () => {
    return (
        <section className="relative">
            <picture>
                <source media="(max-width:767px)" srcSet={HomeHeroMob} />
                <img className="w-full" src={HomeHero} alt="Banner" />
            </picture>

            <div className="w-full relative md:absolute md:bottom-[4%] md:left-[4%] md:w-[42%] overflow-hidden">
                <GlassEffect className="md:hidden" side="top" />

                <div className="relative space-y-6">
                    <P className="text-center text-white">
                        Our 10-day celebration is held every October in bars{" "}
                        <br className="hidden sm:block" />
                        and restaurants nationwide. Each year, we invite{" "}
                        <br className="hidden sm:block" />
                        Bourbon fans to discover creative twists on this classic{" "}
                        <br className="hidden sm:block" />
                        cocktail, while raising a glass for a{" "}
                        <span className="no-wrap">great cause.</span>
                    </P>

                    <LinkGhost
                        path="/events"
                        label="View Events"
                        color="white"
                        className="bg-orange"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
