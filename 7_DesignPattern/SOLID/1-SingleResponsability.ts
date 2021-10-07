namespace SingleResponsability {
    class Square {
        public length: number;

        constructor(length: number) {
            this.length = length;
        }
    }

    class Circle {
        public radius: number;

        constructor(radius: number) {
            this.radius = radius;
        }
    }

    class AreaCalculator {
        protected shapes: (Square | Circle)[]

        public constructor(shapes: (Square | Circle)[] = []) {
            this.shapes = shapes;
        }

        public sum(): number {
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
        }

        //The problem with the output method is that the AreaCalculator handles the logic to output the data.
        /* public output() {
            return [
                '',
                'Sum of the areas of provided shapes: ',
                this.sum(),
                '',
            ].join('');
        } */
    }


    const shapes: (Square | Circle)[] = [
        new Circle(2),
        new Square(5),
        new Square(6),
    ];

    const areas = new AreaCalculator(shapes);



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

    const output = new SumCalculatorOutputter(areas);

    console.log(output.JSON())
    console.log(output.HTML())
}
