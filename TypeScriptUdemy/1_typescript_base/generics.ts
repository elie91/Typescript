
class ArrayOfNumbers {
    constructor(public collection: number[]) { }
    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) { }
    get(index: number): string {
        return this.collection[index]
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) { }
    get(index: number): T {
        return this.collection[index]
    }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);

//figure out automatically the Generics type
new ArrayOfAnything(['a', 'b', 'c']);


class Car {
    print() {
        console.log('car')
    }
}

class House {
    print() {
        console.log('house')
    }
}

interface Printable {
    print(): void
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHouseOrCars<House>([new House(), new House()]);
printHouseOrCars<Car>([new Car(), new Car()]);