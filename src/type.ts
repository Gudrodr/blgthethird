export type MainView = 'main' | 'preview' | 'extended';

export interface ArticleUnit {
    title: string;
    body: string;
    assets?: {
        title: string;
        link: string;
    }[];
}