import { User } from "./User";

export class Trip{
    id?:number;
    name?:string;
    description?:string;
    isDone?:boolean;
    user:User;
}