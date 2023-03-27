import type { StateScheme, ReduxStoreWithManager, ThunkConfig } from './config/StateScheme';
import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateScheme,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
