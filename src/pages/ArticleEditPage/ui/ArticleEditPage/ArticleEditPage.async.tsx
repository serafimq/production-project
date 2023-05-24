import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // для эксперимента, не стоит делать на проекте
    setTimeout(() => resolve(import('./ArticleEditPage')), 1500);
}));
