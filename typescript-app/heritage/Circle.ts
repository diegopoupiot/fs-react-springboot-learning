import { Shape } from './Shape';

export class Circle extends Shape {
    public radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }
    public area(): number {
        return Math.PI * this.radius * this.radius;
    }
}