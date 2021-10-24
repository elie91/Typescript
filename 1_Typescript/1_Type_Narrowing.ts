let span: HTMLElement | null | undefined;

if (span) {
    //span: HTMLElement
    span.innerText = "hello"
}

function printId(id: string | number) {
    if (typeof id === "number") {
        //id : number
        console.log(id * 3)
    } else {
        //id: string
        id.toUpperCase()
    }
}

function example(a: string | boolean, b: string | number, date: string | Date) {
    if (a === b) {
        //detect that the only equal type between a and b is string
        a.toUpperCase()
    }
    if (date instanceof Date) {
        //date: Date
        console.log(date)
    } else {
        //date: string
        console.log(date)
    }
}

function isDate(a: any): a is Date {
    return a instanceof Date
}


function example2(a: MouseEvent | HTMLInputElement | Date) {
    if ("value" in a) {
        //a : HTMLInputElement
        a.value = "toto"
    }
    if ("sdsqddqs" in a) {
        //a: never
        console.log(a)
    }
    if (isDate(a)) {
        //a: Date
        console.log(a)
    }
}

//Element | null
const compteur = document.querySelector('.span')

//Force narrowing
const compteur2 = document.querySelector('.span')!
const compteur3 = document.querySelector('.span') as HTMLInputElement



