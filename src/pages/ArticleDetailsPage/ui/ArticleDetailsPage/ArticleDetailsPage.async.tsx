import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // для эксперимента, не стоит делать на проекте
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
