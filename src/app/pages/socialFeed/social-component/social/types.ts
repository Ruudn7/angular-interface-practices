export interface Post {
    id: number;
    content: string;
    author: {
      name: string,
      avatar: string
    };
    media?: {
        image: string
    };
}
