import React, { createContext, useState } from "react";
import Profile from "../pages/Profile/Profile";
import LanguageEdit from "../components/Profile/ProfileEdit/LanguageEdit";
import { LanguageContextModel } from "../models/contextModels/languageContextModel";

const initialState: LanguageContextModel = {
    languageValue: "",
    handleSetLanguage: () => {},
}

export const LanguageContext = createContext({})

export const LanguageProvider = (props: any) => {
    const [languageValue, setLanguage] = useState<any>("")

    const handleSetLanguage = (value: string) => {
        setLanguage(value);
    };

    return (
        <LanguageContext.Provider value={{ languageValue, handleSetLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );
}
