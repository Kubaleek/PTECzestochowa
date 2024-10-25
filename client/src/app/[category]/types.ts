export interface IProps {
    children: React.ReactNode;
}
export type Params = {
    category: string;  // The main category
    id?: string | null; // The specific item ID for detailed views
    subid?:string | null;
};

export interface User {
    id:Number,
    username:string,
    email:string,
    password:string,
    role:string
}