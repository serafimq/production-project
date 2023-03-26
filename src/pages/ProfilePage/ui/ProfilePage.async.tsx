import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // для эксперимента, не стоит делать на проекте
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
