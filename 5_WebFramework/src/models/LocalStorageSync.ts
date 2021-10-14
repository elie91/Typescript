import axios, { AxiosPromise } from "axios";

interface HasId {
    id?: number;
}

export class LocalStorageSync<T extends HasId> {

    /**
     * 
     * @param id
     * @returns AxiosPromise
     */
    fetch(id: number): Promise<T> {
        return new Promise<T>(resolve => resolve(JSON.parse(localStorage.getItem(id.toString))))
    }

    /**
     * 
     * @param data 
     * @returns AxiosPromise
     */
    save(data: T): void {
        //save in local storage
    }
}