export interface GetGraduationItem{
    degree: string,
    univercityName: string,
    department: string,
    startDate: Date,
    endDate: Date,
    graduationDate: Date,
    toggle: string,
}

export interface GetGraduation{
    items : GetGraduationItem[]
}