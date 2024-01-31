import React, { createContext, useState } from "react";

export const LanguageContext = createContext({})

export const LanguageProvider = (props: any) => {
    const [language, setLanguage] = useState<any>()

    return (
        <LanguageContext.Provider value={{ language }}>
            {props.children}
        </LanguageContext.Provider>
    );
}
