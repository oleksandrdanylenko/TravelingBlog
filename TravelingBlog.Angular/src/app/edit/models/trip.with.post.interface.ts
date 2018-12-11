import { User } from "./UserInfo";

export class TripWithPost {
    constructor(
    public Id? : number,
    public Name?: string,
    public Description?: string,
    public IsDone?: boolean,
    public User?:User,
    public PostBlogs?:Post[]){}
}

export class Post{
    constructor(
        public Id?: number,
        public Name?: string,
        public Plot?: string,
        public DatOfCreation?: string,
        public TripId?:number
    ){}
}