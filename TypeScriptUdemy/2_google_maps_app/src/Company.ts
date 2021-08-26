import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    content(): string {
        return `
        <div>
            <h3>Company name is ${this.name}</h3>
            <h5>Catch phrase is ${this.catchPhrase}</h5>
        </div>  
        `
    }
}