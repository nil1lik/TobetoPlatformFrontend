export interface GetCalendarItem{
    id: number;
    startDate: Date;
    educationPathName: string;
    firstName: string;
    lastName: string;
}

export interface GetCalendar{
    items: GetCalendarItem[];
}