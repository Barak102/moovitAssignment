export class Circle {
    x: number;
    y: number;
    r: number;

 constructor(x: number,y: number,r: number) {
    this.x = x;
    this.y = y;
    this.r = r;
 }

isOverlapping(circle: Circle): boolean {
    let distance: number = Math.sqrt(Math.pow((circle.x - this.x),2) + Math.pow((circle.y - this.y),2));
    let radiusSum: number = circle.r + this.r;
    return distance <= radiusSum;
     }
}