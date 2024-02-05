export interface GetCalendarItem{
    StartDate: Date;
    SessionName: string;
    InstructorId: number;
}

export interface GetCalendar{
    items: GetCalendarItem[];
}