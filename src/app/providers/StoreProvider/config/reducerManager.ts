import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import {
    MountedReducer, ReducerManager, StateSchema, StateSchemaKey,
} from './StateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: Array<StateSchemaKey> = [];
    const mountedReducer: MountedReducer = {};

    return {
        getReducerMap: () => reducers,
        getMountedReducer: () => mountedReducer,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mountedReducer[key] = true;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            mountedReducer[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}
//
// const staticReducers = {
//     users: usersReducer,
//     posts: postsReducer,
// };
//
// export function configureStore(initialState) {
//     const reducerManager = createReducerManager(staticReducers);
//     const store = createStore(reducerManager.reduce, initialState);
//     store.reducerManager = reducerManager;
// }
