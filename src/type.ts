export type MainView = 'main' | 'preview' | 'extended';

export interface ArticleUnit {
    title: string;
    alias: string;
    body: string;
    assets?: {
        title: string;
        link: string;
    }[];
}