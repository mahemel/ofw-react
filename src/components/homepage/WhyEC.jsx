import SectionHeader from "../../ui/SectionHeader";

const WhyEC = () => {
    return (
        <div className="bg-black section-padding text-white">
            <SectionHeader
                center
                heading={<>Why ELIJAH craig?</>}
                paragraph={
                    <>
                        Our Master Distiller’s expertise and attention to detail
                        give Elijah Craig Small Batch
                        <br />
                        the right balance of rich flavor and full body that’s
                        perfect for the spirit-forward
                        <br />
                        Old Fashioned. Its signature warm spice and subtle smoke
                        flavor complement
                        <br />
                        the sweetness and spiciness of the cocktail’s key
                        ingredients.
                    </>
                }
            />
        </div>
    );
};

export default WhyEC;
