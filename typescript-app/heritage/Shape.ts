export abstract class Shape {
    public color: string;

    protected constructor(color: string) {
        this.color = color;
    }
    public area(): number {
        return 0;
    }

}