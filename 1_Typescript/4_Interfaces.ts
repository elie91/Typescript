/** *******************************************************************
 * Interfaces
 ******************************************************************** */
type TPoint = {
  x: number
  y: number
}

// interface not working for primitive type, type yes
//interface toto : string

interface IPoint {
  x: number;
  get(): number
}

// interfaces can be fusionned
interface IPoint {
  y: number
}

const p: IPoint = {
  x: 0,
  get: () => 2,
  y: 3
}

// fusion useful in Window for example
interface Window {
  googleAnalytics: string
}

//We can also extends a type via intersections
type TAnimal = {
  name: string
}

type TBear = TAnimal & {
  honey: boolean
}

window.googleAnalytics

/** *******************************************************************
 * Implement Interface
 ******************************************************************** */

class TwoDimensionPoint implements IPoint {
  x = 0
  y = 0
  get = () => 3
}

function draw(p: Point) { }

draw(new TwoDimensionPoint())



