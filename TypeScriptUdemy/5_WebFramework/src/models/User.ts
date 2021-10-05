import { Eventing } from "./Eventing";
import { Sync } from './Sync';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {

    private data: UserProps;
    //La classe Eventing ne va probablement jamais changer, on peut donc l'instancier ici directement
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

    constructor(data: UserProps) {
        this.data = data;
    }

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

}