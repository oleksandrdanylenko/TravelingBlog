import { User } from "./User";
import { postBlog } from "./PostBlog";
export class TripHalf{
    id?:number;
    name?:string;
    description?:string;
    isDone?:boolean;
    user?:User;
    postBlog?:postBlog[];
}