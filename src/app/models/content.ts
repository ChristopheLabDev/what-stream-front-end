export class Content {
    id?: string;
    name: string;
    duration: number;
    description: string;

    constructor(paramName: string, paramDuration: number, paramDescription: string) {
        this.name = paramName;
        this.duration = paramDuration;
        this.description = paramDescription;
    } 
}
