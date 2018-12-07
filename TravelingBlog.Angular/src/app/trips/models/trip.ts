import { User } from "./User";
import { postBlog } from "./PostBlog";
import { TripHalf } from "./TripHalf";

export class Trip{
    total?:number;
    list:TripHalf[];
}