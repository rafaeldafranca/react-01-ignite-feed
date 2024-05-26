export type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

export type Content = {
    type: 'paragraph' | 'link';
    content: string

}

export type PostType = {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}
