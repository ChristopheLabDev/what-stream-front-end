export class Content {
    id?: string;
    name: string;
    description: string;
    releasedate: string;
    duration: number;
    picturelink: string;
    rate: number;

    constructor(paramName: string, paramDescription: string, paramReleasedate: string,  paramDuration: number, paramPicturelink: string, paramRate: number) {
        this.name = paramName;
        this.description = paramDescription;
        this.releasedate = paramReleasedate;
        this.duration = paramDuration;
        this.picturelink = paramPicturelink;
        this.rate = paramRate;
    } 
}
