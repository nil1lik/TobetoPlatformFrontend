import React, { createContext, useState } from "react";

export const SkillContext = createContext({})

export const SkillProvider = (props: any) => {
    const [skill, setSkill] = useState<any>()

    return (
        <SkillContext.Provider value={{ skill, setSkill }}>
            {props.children}
        </SkillContext.Provider>
    );
}
