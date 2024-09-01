export interface IProps {
    children: React.ReactNode;
}
export type Params = {
    category: string;  // The main category
    id?: string | null; // The specific item ID for detailed views
};
