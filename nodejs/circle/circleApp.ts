import { CircleStore } from './circleStore';
import { Circle } from './circle';

const mainCircle: Circle = new Circle(2, 2, 2);
const circleTwo: Circle = new Circle(-1, 2, 2);
const circleThree: Circle = new Circle(6, 2, 1);
const circleFour: Circle = new Circle(-5, -2, 6.1);


//Step 1
console.log(mainCircle.isOverlapping(circleTwo)); // true
console.log(mainCircle.isOverlapping(circleThree)); // false
console.log(mainCircle.isOverlapping(circleFour)); // true


//Step2
const circlesStore: CircleStore = new CircleStore();

let checkCircle: Circle = new Circle(1, 1, 1);

for (let i = 0; i < 10000; i++) {
    const newCircle: Circle = new Circle(
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 20),
        Math.ceil(Math.random() * 20)
    );
    circlesStore.addCircle(newCircle);
}


const overlapReuslt: Circle[] = circlesStore.getOverlapingCircles(checkCircle);
console.log(`those are the circles that overlap to the ${JSON.stringify(checkCircle)} (${overlapReuslt.length} results)`);

setTimeout(() => {
    overlapReuslt.forEach(c => console.log(c));
}, (2000));