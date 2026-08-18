import SectionHeader from "../../ui/SectionHeader";

const GetInAction = () => {
    return (
        <div className="bg-black section-padding text-white">
            <SectionHeader
                center
                heading="GET IN ON THE ACTION"
                paragraph={
                    <>
                        Sign up your bar for our 7th annual event.
                        <br />
                        Fans of the Old Fashioned will be able to find your
                        location and stop
                        <br />
                        in for an expertly-crafted cocktail.
                    </>
                }
                url="/login"
                ctaLabel="Register Your Bar"
                btnColor="white"
            />
        </div>
    );
};

export default GetInAction;
