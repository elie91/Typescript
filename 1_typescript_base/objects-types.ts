/********* Interface *********/

// Extending an interface
interface IAnimal {
    name: string
}

interface IBear extends IAnimal {
    honey: boolean
}
const bear = getBear()
bear.name
bear.honey

// Adding new fields to an existing interface
interface IWindow {
    title: string
}

interface IWindow {
    ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});


/********* Type *********/
//Extending a type via intersections
type TAnimal = {
    name: string
}

type TBear = TAnimal & {
    honey: boolean
}

const bear = getBear();
bear.name;
bear.honey;

// A type cannot be changed after being created
type Window = {
    title: string
}

type Window = {
    ts: TypeScriptAPI
}

// Error: Duplicate identifier 'Window'.
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces 


/********* Property Modifiers *********/