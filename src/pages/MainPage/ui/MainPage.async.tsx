import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // для эксперимента, не стоит делать на проекте
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));
