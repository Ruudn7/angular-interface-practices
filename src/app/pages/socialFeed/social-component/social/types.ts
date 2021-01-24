export interface Post {
    id: number;
    content: string;
    type: string;
    author: {
      name: string,
      avatar: string
    };
    media?: {
        image: string
    };
}
