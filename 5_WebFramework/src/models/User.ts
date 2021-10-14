import { Model } from "./Model";
import { Eventing } from "./Eventing";
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
//import { LocalStorageSync } from "./LocalStorageSync";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        )
    }

    /*     static buildLocalUser(attrs: UserProps): User {
            return new User(
                new Attributes<UserProps>(attrs),
                new Eventing(),
                new LocalStorageSync<UserProps>()
            )
        }
     */
    isAdminUser(): boolean {
        return this.get('id') === 1
    }
}