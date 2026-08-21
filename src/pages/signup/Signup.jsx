import { useState } from "react";
import SignupHeader from "../../components/signup/SignupHeader";
import PassworldField from "../../ui/PassworldField";
import SectionHeader from "../../ui/SectionHeader";
import TextField from "../../ui/TextField";

const barFields = [
    {
        id: "barName",
        type: "text",
        placeholder: "Bar Name",
        isRequired: true,
    },
    {
        id: "city",
        type: "text",
        placeholder: "City",
        isRequired: true,
    },
    {
        id: "state",
        type: "text",
        placeholder: "State",
        isRequired: true,
    },
    {
        id: "streetAddress",
        type: "text",
        placeholder: "Street Address",
        isRequired: true,
    },
    {
        id: "zipCode",
        type: "text",
        placeholder: "Zip Code",
        isRequired: true,
        pattern: "[0-9]{5}",
        maxLength: 5,
        inputMode: "numeric",
        title: "Zip Code must be exactly 5 digits",
    },
    {
        id: "barPhone",
        type: "tel",
        placeholder: "Bar Phone Number",
        isRequired: true,
    },
    {
        id: "websiteUrl",
        type: "url",
        placeholder: "Website URL",
        isRequired: false,
    },
    {
        id: "facebookUrl",
        type: "url",
        placeholder: "Facebook URL",
        isRequired: false,
    },
    {
        id: "instagramUrl",
        type: "url",
        placeholder: "Instagram URL",
        isRequired: false,
    },
];
const Signup = () => {
    const [barCountry, setBarCountry] = useState("USA");
    return (
        <>
            <SignupHeader />

            <div className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <ul className="steps steps-horizontal w-100 mx-auto grid">
                        <li className="step step-primary leading-none">
                            Contact/Bar
                            <br /> Information
                        </li>
                        <li className="step leading-none">Cocktail Info</li>
                        <li className="step leading-none">Complete</li>
                    </ul>

                    <div className="section-padding max-w-3xl mx-auto">
                        <SectionHeader
                            center
                            heading="Personal Information"
                            paragraph="Note: This information is not public-facing, it is for  to reach out if needed."
                        ></SectionHeader>

                        <form
                            id="signup-form"
                            name="signup-form"
                            className="mt-10"
                        >
                            <div className="step-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <TextField
                                        id="firstName"
                                        placeholder="First Name"
                                        isRequired
                                    />

                                    <TextField
                                        id="lasttName"
                                        placeholder="Last Name"
                                        isRequired
                                    />
                                    <TextField
                                        id="email"
                                        placeholder="Email Address"
                                        isRequired
                                        type="email"
                                        className="col-span-2"
                                    />

                                    <PassworldField
                                        id="password"
                                        placeholder="Password"
                                    />
                                    <PassworldField
                                        id="confirm_password"
                                        placeholder="Confirm Password"
                                        confirmation
                                    />
                                </div>

                                <div className="section-padding">
                                    <SectionHeader
                                        center
                                        heading="Bar Contact"
                                        paragraph="Note: This information is not public-facing, it is for  to reach out if needed."
                                    ></SectionHeader>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                                        <TextField
                                            id="contactName"
                                            placeholder="Contact Name"
                                            isRequired
                                        />
                                        <TextField
                                            id="contactPhone"
                                            placeholder="Contact Phone"
                                            type="tel"
                                            isRequired
                                        />
                                        <TextField
                                            id="contactEmail"
                                            placeholder="Email Address"
                                            isRequired
                                            type="email"
                                            className="col-span-2"
                                        />
                                    </div>

                                    <div className="section-padding">
                                        <SectionHeader
                                            center
                                            heading="Bar Information"
                                            paragraph="Note: This information is not public-facing, it is for  to reach out if needed."
                                        ></SectionHeader>

                                        <div className="countrySelection flex justify-center mt-5">
                                            <div className="flex gap-3">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="barCountry"
                                                        value="USA"
                                                        checked={
                                                            barCountry === "USA"
                                                        }
                                                        onChange={(e) =>
                                                            setBarCountry(
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="peer sr-only"
                                                    />

                                                    <span className="btn peer-checked:btn-neutral">
                                                        United States
                                                    </span>
                                                </label>

                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="barCountry"
                                                        value="CA"
                                                        checked={
                                                            barCountry === "CA"
                                                        }
                                                        onChange={(e) =>
                                                            setBarCountry(
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="peer sr-only"
                                                    />

                                                    <span className="btn peer-checked:btn-neutral">
                                                        Canada
                                                    </span>
                                                </label>

                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="barCountry"
                                                        value="UK"
                                                        checked={
                                                            barCountry === "UK"
                                                        }
                                                        onChange={(e) =>
                                                            setBarCountry(
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="peer sr-only"
                                                    />

                                                    <span className="btn peer-checked:btn-neutral">
                                                        United Kingdom
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                                            {barFields.map((field) => (
                                                <TextField
                                                    key={field.id}
                                                    {...field}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
