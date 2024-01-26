export interface GetAnnouncementTypeItem {
    id: number,
    name: string,
    announcementTypeName: string, 
    title: string,
    createdDate: Date
    description: string,
};

export interface GetAnnouncementTypeList{
    items : GetAnnouncementTypeItem[];
}