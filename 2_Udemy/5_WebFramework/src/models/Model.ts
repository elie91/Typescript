import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
    set(value: T): void;
    get<K extends keyof T>(key: K): T[K];
    getAll(): T
}
interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}


interface HasId {
    id?: number;
}

export class Model<T extends HasId> {

    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) { }

    /* 
    get on() {
        //Not calling the function, but return a reference
        return this.events.on
    }
    */

    //same as above
    on = this.events.on;
    trigger = this.events.trigger;
    get = this.attributes.get;

    set(update: T): void {
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