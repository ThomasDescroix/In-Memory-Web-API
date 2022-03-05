export interface Cat {
  id: number;
  name: string;
  image?: {
    height: number;
    id: string;
    width: number;
    url: string;
  }
}