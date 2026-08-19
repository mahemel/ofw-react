import { createContext, useContext, useEffect, useState } from "react";

const CountryContext = createContext(null);

export const CountryProvider = ({ children }) => {
    const [selectedCountry, setSelectedCountry] = useState(() => {
        const cookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith("selectedCountry="));

        return cookie ? cookie.split("=")[1] : "USA";
    });

    const countryChange = (country) => {
        setSelectedCountry(country);

        document.cookie = `selectedCountry=${country}; max-age=${365 * 24 * 60 * 60}; path=/`;
    };

    return (
        <CountryContext.Provider value={{ selectedCountry, countryChange }}>
            {children}
        </CountryContext.Provider>
    );
};

export const useCountry = () => useContext(CountryContext);
