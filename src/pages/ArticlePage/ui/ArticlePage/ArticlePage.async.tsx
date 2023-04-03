import { lazy } from 'react';

export const ArticlePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // для эксперимента, не стоит делать на проекте
    setTimeout(() => resolve(import('./ArticlePage')), 1500);
}));
