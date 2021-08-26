
const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;
const nothing: null = null;
const nothingMuch: undefined = undefined;

//************* built in objects *******************
let now: Date = new Date();

//array
let colors: string[] = ['red', 'blue'];
const anycolors: any[] = ['test', 1];
const dates: Date[] = [new Date(), new Date()];
const cars: string[][] = [
    ["audi"],
    ["bmw"],
];
const flexibleDates: (string | Date)[] = [
    new Date(),
    '2020-10-10'
];

//************* tuples *************************
const drinks = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}
//right now, this is an array, we can swap the order
let pepsi = ['brown', true, 40];
//here, this is a tuple. we cant swap the order
let pepsi2: [string, boolean, number] = ['brown', true, 40];
//better way to write a tuple
type Drink = [string, boolean, number];
const pepsi3: Drink = ['brown', true, 40];


//************* classes *************************
class Car { }
let car: Car = new Car();


//************* function *****************************************
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}
const add = (a: number, b: number): number => {
    return a + b;
}
function divide(a: number, b: number): number {
    return a / b;
}
const multiply = function (a: number, b: number): number {
    return a * b;
}

//************* void & never ************************************
const logger = (message: string): void => {
    console.log(message);
}
const throwError = (message: string): never => {
    throw new Error(message);
}

//************* ES6 destructuration *************************
const todayForecast = {
    date: new Date(),
    weather: 'sunny'
}
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}
logWeather(todayForecast);


//************* object destructuration *************************
const profil = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age }: { age: number } = profil;
const {
    coords: { lat, lng }
}: { coords: { lat: number, lng: number } } = profil;
