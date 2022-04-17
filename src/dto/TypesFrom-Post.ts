export type Post = {
  id: number;
  title: string;
  content: string;
  onlyFrends?: boolean;
  onlyFollowers?: boolean;
}