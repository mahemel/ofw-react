import { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";

const PassworldField = ({
    id,
    placeholder,
    className = "",
    confirmation = false,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    console.log(showPassword);
    const handleShowPassword = (e) => {
        e.preventDefault();

        setShowPassword((prev) => !prev);
    };
    return (
        <fieldset className={`fieldset relative p-0 ${className}`}>
            <label className="label" htmlFor={id}>
                {placeholder}
            </label>
            <input
                type={showPassword ? "text" : "password"}
                className="input validator w-full"
                required
                id={id}
                name={id}
                placeholder={placeholder}
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            {!confirmation && (
                <p className="validator-hint visible">
                    Must be more than 8 characters, including at least one
                    number, at least one lowercase letter, at least one
                    uppercase letter
                </p>
            )}

            <button
                type="button"
                className="absolute right-2 top-9.25 cursor-pointer"
                onClick={handleShowPassword}
            >
                {showPassword ? (
                    <RxEyeOpen className="w-3.5 h-3.5" />
                ) : (
                    <GoEyeClosed className="w-3.5 h-3.5" />
                )}
            </button>
        </fieldset>
    );
};

export default PassworldField;
