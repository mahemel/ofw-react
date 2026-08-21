import SectionHeader from "../../ui/SectionHeader";

const SignupHeader = () => {
    return (
        <div className="section-padding bg-orange">
            <div className="max-w-7xl mx-auto text-white">
                <SectionHeader
                    center
                    heading="Get Ready to mix with us"
                    paragraph={
                        <>
                            Create a bar or restaurant profile to be added to
                            our
                            <br />
                            interactive map feature. You can also share any
                            drink
                            <br />
                            specials you will be offering during the event.
                        </>
                    }
                ></SectionHeader>
            </div>
        </div>
    );
};

export default SignupHeader;
