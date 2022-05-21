export class Content {
    id?: string;
    name: string;
    description: string;
    author: string;
    releasedate: string;
    duration: string;
    picturelink: string;
    rate: string;

    constructor(paramName: string, paramDescription: string, paramAuthor: string, paramReleasedate: string,  paramDuration: string, paramPicturelink: string, paramRate: string) {
        this.name = paramName;
        this.description = paramDescription;
        this.author = paramAuthor;
        this.releasedate = paramReleasedate;
        this.duration = paramDuration;
        this.picturelink = paramPicturelink;
        this.rate = paramRate;
    } 
}
