import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                username: '123',
            },
        };
        expect(getLoginUsername(state as StateScheme)).toEqual('123');
    });
    test('should return empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginUsername(state as StateScheme)).toEqual('');
    });
});
