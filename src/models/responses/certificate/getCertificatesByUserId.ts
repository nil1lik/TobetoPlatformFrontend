export interface getCertificatesByUserId {
    Id: number;
    CertificateId: number;
    CertificateName: string;
    CertificateFileUrl: string;
    CerfiticateFileType: string;
}

export interface getCertificateByUserIdList {
    userProfileId: number;
    certificateDtoItem: getCertificatesByUserId[];
}