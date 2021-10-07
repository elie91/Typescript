namespace OpenClosed {

    interface ShapeInterface {
        area: () => number
    }

    class Square implements ShapeInterface {
        public length: number;

        constructor(length: number) {
            this.length = length;
        }

        area(): number {
            return Math.pow(this.length, 2)
        }
    }

    class Circle implements ShapeInterface {
        public radius: number;

        constructor(radius: number) {
            this.radius = radius;
        }

        area(): number {
            return Math.PI * Math.pow(this.radius, 2)
        }
    }


    class AreaCalculator {
        protected shapes: ShapeInterface[]

        public constructor(shapes: ShapeInterface[] = []) {
            this.shapes = shapes;
        }

        /*
        Consider a scenario where the user would like the sum of additional shapes like triangles, pentagons, hexagons, etc. 
        You would have to constantly edit this file and add more if/else blocks. That would violate the open-closed principle
        */
        /* public sum(): number {
            const area: number[] = []
            this.shapes.forEach(shape => {
                if (shape instanceof Square) {
                    area.push(Math.pow(shape.length, 2))
                }
                else if (shape instanceof Circle) {
                    area.push(Math.PI * Math.pow(shape.radius, 2))
                }
            })

            return area.reduce((prev, acc) => acc + prev, 0)
        } */
        public sum(): number {
            const area: number[] = []
            this.shapes.forEach(shape => area.push(shape.area()))
            return area.reduce((prev, acc) => acc + prev, 0)
        }
    }


    class SumCalculatorOutputter {
        protected calculator: AreaCalculator;

        constructor(calculator: AreaCalculator) {
            this.calculator = calculator;
        }

        public JSON() {
            const data = {
                'sum': this.calculator.sum()
            }

            return JSON.stringify(data)
        }

        public HTML() {
            return [
                '',
                'Sum of the areas of provided shapes: ',
                this.calculator.sum(),
                '',
            ].join('');
        }
    }


    const shapes: (Square | Circle)[] = [
        new Circle(2),
        new Square(5),
        new Square(6),
    ];

    const areas = new AreaCalculator(shapes);
    const output = new SumCalculatorOutputter(areas);

    console.log(output.JSON())
    console.log(output.HTML())
}

