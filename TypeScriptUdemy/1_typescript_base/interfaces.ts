
//interface to fix long annotations
//try to use interface in a generic way

interface Reportable {
    //name: string;
    //year: Date;
    //broken: boolean;
    summary(): string;
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}


printSummary(oldCivic);
printSummary(drink);
