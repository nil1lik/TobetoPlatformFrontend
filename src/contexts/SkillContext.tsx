import React, { createContext, useState } from "react";
import Profile from "../pages/Profile/Profile";
import SkillEdit from "../components/ProfileEdit/SkillEdit";

export const SkillContext = createContext({})

export const SkillProvider = (props: any) => {
    const [skill, setSkill] = useState<any>()

    return (
        <SkillContext.Provider value={{ skill }}>
            <Profile/>
            <SkillEdit/>
        </SkillContext.Provider>
    );
}
