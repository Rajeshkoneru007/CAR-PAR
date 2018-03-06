export interface BasicInfo{
    location:string
    vendorName:string
    vendorId:string
    vendorDBA:string
    VendorStatus:string
}

export interface DueDilligenceExpiration{
    type:string,
    documentName:string,
    expirationDate:string,
    missingDocument:string
}

export interface VendorSummary{
    basicInfo:BasicInfo,
    dueDilligenceExpiration:DueDilligenceExpiration[]
}

