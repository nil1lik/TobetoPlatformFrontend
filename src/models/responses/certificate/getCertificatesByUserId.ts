export interface getCertificateByUserId {
    Id: number;
    certificateId: number;
    certificateName: string;
    certificateFileUrl: string;
    cerfiticateFileType: string;
}

export interface getCertificateByUserIdList {
    userProfileId: number;
    certificateDtoItems: getCertificateByUserId[];
}