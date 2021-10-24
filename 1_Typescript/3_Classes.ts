/** *******************************************************************
 * Readonly
 ******************************************************************** */
function reverse<T>(arr: readonly T[]): T[] {
    return [...arr].reverse();
}


/** *******************************************************************
 * Class
 ******************************************************************** */
class A {
    //property a : number
    private a = 3;
    protected b = 2;
    public c = 1;
    #newA = 4;

    log() {
        console.log(this.a)
    }
}

class B extends A {
    log() {
        console.log(this.b)
    }
}

class C {
    constructor(
        public a: number
    ) { }
}


const aInstance = new A();

//throw an error
//console.log(aInstance.a)

//Not throw an error
//console.log(aInstance['a'])

//throw an error with the new # syntax
//console.log(aInstance['newA'])


/** *******************************************************************
 * With Generics
 ******************************************************************** */
class Collection<T> {
    constructor(private items: T[]) {

    }

    // this ne fait pas que référence à une instance, mais à un objet qui à la même forme que la classe courante
    add(item: T): this {
        this.items.push(item)
        return this
    }

    first(): T | null {
        return this.items[0]
    }
}

const arrr = new Collection([1, 2, 3]);
const totot = arrr.first()
arrr.add(3)


/** *******************************************************************
 * Change this context
 ******************************************************************** */
class Subscriber {
    on(this: HTMLInputElement, name: string, cb: Function) {
        // this: HTMLInputElement
        this
    }
}

/** *******************************************************************
 * Class comparaison
 ******************************************************************** */
class Point {
    x = 0
    y = 0
}

class Geometry {
    x = 0
    y = 0
    surface = 0
}

function getX(p: Point) {
    return p.x
}

// No error, Typescript want a class that has x and y, so in this case Point is same as Geometry
getX(new Geometry())


/** *******************************************************************
 * Abstract & Static
 ******************************************************************** */
abstract class Geometry2 {
    public static origin = { x: 0, y: 0 }
    x = 0
    y = 0
    abstract surface(): number
}

class Triangle extends Geometry2 {
    x = 2
    y = 2
    surface() {
        return 3
    }
}

Geometry2.origin
