export type MainView = 'main' | 'preview' | 'article';

export interface ArticleUnit {
    title: string;
    body: string;
    assets?: {
        title: string;
        link: string;
    }[];
}