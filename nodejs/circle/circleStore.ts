import { Circle } from './circle';

export class CircleStore {
    circles: Circle[] = [];

    addCircle(circle: Circle): void {
        this.circles.push(circle);
    }

    getOverlapingCircles(circle: Circle): Circle[] {
        return this.circles.filter((c: Circle) => c.isOverlapping(circle));
    }
}