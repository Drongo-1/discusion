export class Discussion {
    public showMeta:boolean;
    constructor(
        public id: number,
        public topic:string )
        {
        this.showMeta = false
    }
}
