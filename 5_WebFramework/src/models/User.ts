import { Eventing } from "./Eventing";
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from "axios";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
    private attributes: Attributes<UserProps>;
    private events: Eventing = new Eventing();
    private sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs);
    }

    // Not good, we need to check what is the function signature
    /*  on(eventName: string, callback: Callback): void {
         this.events.on(eventName, callback)
     } */

    get on() {
        //Not calling the function, but return a reference
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }

    get get() {
        return this.attributes.get
    }

    set(update: UserProps) {
        this.attributes.set(update);
        this.events.trigger('change')
    }

    async fetch(): Promise<void> {
        const id = this.attributes.get('id');
        if (!id) {
            throw new Error('Missing ID')
        }
        const response: AxiosResponse = await this.sync.fetch(id)
        this.set(response.data);
    }

    async save(): Promise<void> {
        await this.sync.save(this.attributes.getAll())
        this.events.trigger('save')
    }

}