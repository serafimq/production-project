import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateScheme } from 'app/providers/StoreProvider/config/StateScheme';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateScheme>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const navigate = useNavigate();
    const store = createReduxStore(
        initialState as StateScheme,
        asyncReducers as ReducersMapObject<StateScheme>,
        navigate,
    );
    return <Provider store={store}>{children}</Provider>;
};
