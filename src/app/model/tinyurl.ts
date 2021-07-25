export class CustomTinyUrlResponse{
    hashedUrl: string;
    actualUrl: string;
    accessCount: number;
    constructor(hashedUrl:string, actualUrl: string, accessCount:number){
        this.hashedUrl = hashedUrl;
        this.actualUrl = actualUrl;
        this.accessCount = accessCount;
    }
}