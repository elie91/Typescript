import axios, { AxiosPromise } from "axios";

interface HasId {
    id?: number;
}

export class Sync<T extends HasId> {

    public rootUrl: string;

    constructor(rootUrl: string) {
        this.rootUrl = rootUrl;
    }

    /**
     * 
     * @param id
     * @returns AxiosPromise
     */
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`)
    }

    /**
     * 
     * @param data 
     * @returns AxiosPromise
     */
    save(data: T): AxiosPromise {
        const { id } = data;
        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data)
        } else {
            return axios.post(`${this.rootUrl}`, data)
        }
    }
}