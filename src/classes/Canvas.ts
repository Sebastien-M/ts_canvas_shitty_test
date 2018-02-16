export class Canvas {
    width: number;
    height: number;
    element: HTMLCanvasElement;
    ctx: any;

    constructor(element: HTMLCanvasElement, width: number, height: number) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.ctx = this.element.getContext('2d');
    }
    
}