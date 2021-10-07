class Vehicle {

    public color: string;

    constructor(color: string) {
        this.color = color;
    }

    protected honk(): void {
        console.log('beep');
        console.log(this.color);
    }
}

class Car extends Vehicle {

    public wheels: number;

    constructor(wheels: number, color: string) {
        super(color);
        this.wheels = wheels;
    }

    private drive(): void {
        console.log('car driving')
    }

    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'string');
console.log(car.startDrivingProcess());
console.log(car.color);

