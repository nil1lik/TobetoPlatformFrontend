import React, { ReactNode } from "react";
import { SkillProvider } from "./SkillContext";
import { LanguageProvider } from "./LanguageContext";

interface ProfileContextProviderProps {
    children: ReactNode;
}

export const ProfileContextProvider: React.FC<ProfileContextProviderProps> = ({ children }) => (
    <SkillProvider>
        <LanguageProvider>
            {children}
        </LanguageProvider>
    </SkillProvider>
);
