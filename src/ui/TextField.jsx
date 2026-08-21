const TextField = ({
    id,
    placeholder,
    isRequired = false,
    className = "",
    type = "text",
}) => {
    return (
        <fieldset className={`fieldset relative p-0 ${className}`}>
            <label className="label" htmlFor={id}>
                {placeholder}
            </label>
            <input
                type={type}
                required={isRequired}
                id={id}
                name={id}
                className={`input validator w-full ${
                    type === "tel" ? "tabular-nums" : ""
                }`}
                placeholder={placeholder}
                pattern={type === "tel" ? "[0-9]{10}" : undefined}
                minLength={type === "tel" ? 10 : undefined}
                maxLength={type === "tel" ? 10 : undefined}
                title={type === "tel" ? "Must be 10 digits" : undefined}
            />

            <div className="validator-hint absolute bg-red-500 text-white left-1/2 -top-2 -translate-x-1/2 px-3 py-1 rounded-full ">
                Please enter
                {type === "email" || type === "tel" ? " valid " : " "}
                {placeholder.toLowerCase()}
            </div>
        </fieldset>
    );
};

export default TextField;
