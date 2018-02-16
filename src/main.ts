import { Canvas } from './classes/Canvas';

let selector: HTMLCanvasElement = document.body.querySelector('.main');
let canvas = new Canvas(selector, 400, 240);

let circle = new Path2D();

selector.addEventListener('mousemove', (e) => {
    circle.arc(canvas.width / 2, canvas.height / 2, e.clientX, 0, Math.PI * 2, true);
    canvas.ctx.stroke(circle);
    circle.closePath();
});

// selector.addEventListener('mouseout', (e) => {
//     canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // circle.closePath();
// });

