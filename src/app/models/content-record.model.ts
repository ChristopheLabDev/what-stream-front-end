export class ContentRecord {
constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdDate: Date,
    public releaseDate: Date,
    public snaps: number) {
    }
}