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
    comments?: Comment[];
}

export interface Comment {
    id: number;
    content?: string;
    author: {
        name: string;
        avatar: string;
    };
    comments?: Comment[];
}
