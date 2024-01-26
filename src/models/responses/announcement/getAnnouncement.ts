export interface GetAnnouncementItem {
    id: number,
    name: string,
    title: string,
    createdDate: Date
    description: string,
};

export interface GetAnnouncement{
    items : GetAnnouncementItem[];
}  