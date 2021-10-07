// ********* Generic Functions *********
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}
const testString = firstElement(['a', 'b'])
const testNumber = firstElement([1, 2])
const testBoolean = firstElement([true, false])


// ********* Inference *********
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}
const toNum = map(["1", "2", "3"], (n) => parseInt(n));
const toStr = map([1, 2, 3], (n) => n.toString());


// ********* Constraints *********
function longest<T extends { length: number }>(a: T, b: T) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);


// ********* Specifying Type Arguments *********
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
const arr = combine<string | number>([1, 2, 3], ["hello"]);


// ********* Guidelines for Writing Good Generic Functions *********

//  1 - Push Type Parameters Down : When possible, use the type parameter itself rather than constraining it
function firstElement1<Type>(arr: Type[]) {
    return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);



//  2 - Use Fewer Type Parameters : Always use as few type parameters as possible
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

// bad
function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
): Type[] {
    return arr.filter(func);
}

// 3 - Type Parameters Should Appear Twice: If a type parameter only appears in one location, strongly reconsider if you actually need it
function greet<Str extends string>(s: Str) { //bad
    console.log("Hello, " + s);
}

greet("world");



// ********* Function Overloads *********
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);


// ********* Rest Parameters and Arguments *********

function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const result = multiply(10, 1, 2, 3, 4);
