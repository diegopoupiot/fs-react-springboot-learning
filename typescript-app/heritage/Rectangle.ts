import { Shape } from "./Shape";

export class Rectangle extends Shape {
    public width: number;
    public height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }
    public area(): number {
        return this.width * this.height;
    }
}