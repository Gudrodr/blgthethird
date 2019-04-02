export type MainView = 'main' | 'preview' | 'extended';

export interface ArticleUnit {
    tags: string;
    date: string;
    author: string;
    title: string;
    alias: string;
    body: string;
}