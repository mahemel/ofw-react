import Banner from "../../components/homepage/Banner";
import CocktailsForCause from "../../components/homepage/CocktailsForCause";
import GetInAction from "../../components/homepage/GetInAction";
import WhyEC from "../../components/homepage/WhyEC";

const Homepage = () => {
    return (
        <div>
            <Banner />
            <GetInAction />
            <CocktailsForCause />
            <WhyEC />
        </div>
    );
};

export default Homepage;
