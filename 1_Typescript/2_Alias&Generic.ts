/** *******************************************************************
 * Generics
 ******************************************************************** */

type User = { firstname: string, lastname: string }
type DateString = string
type Id = string | number
//Username : string
type UserFirstname = User['firstname']
//Username: firstname | lastname
type Username = keyof User

const user: User = { firstname: "elie", lastname: "bismuth" }
const date: DateString = 'string'


function identity<T>(arg: T): T {
    return arg
}
//identityNum: number
const identityNum = identity(3);
//identityNum: string
const identityStr = identity("hello");



function first<T>(arg: T[]): T {
    return arg[0]
}
//firstLetter: string
const firstLetter = first(['a', 'b', 'c'])
//firstLetter: number
const firstNum = first([1, 2, 3]);


//compteur1: HTMLButtonElement | null
const compteur1 = document.querySelector<HTMLButtonElement>('.compteur')


// Array is a generic Type
const mix: Array<string | number> = ['a', 'b', 3];


// Type with generics
type Identity<T> = (arg: T) => T


/** *******************************************************************
 * Generics Constraints
 ******************************************************************** */

function consoleSize<T extends { length: number }>(arg: T): T {
    console.log(arg.length)
    return arg
}
const withLength = consoleSize("hello")
const withoutLength = consoleSize(3)

const food = {
    name: "apple",
    cost: 2
}
/*
type Food = {
    name: string;
    cost: number;
}
*/
type Food = typeof food


/** *******************************************************************
 * Ingerence
 ******************************************************************** */
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}
const toNum = map(["1", "2", "3"], (n) => parseInt(n));
const toStr = map([1, 2, 3], (n) => n.toString());


/** *******************************************************************
 * Specifying Type Arguments
 ******************************************************************** */
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
const arr = combine<string | number>([1, 2, 3], ["hello"]);
