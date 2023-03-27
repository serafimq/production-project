import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateScheme)).toEqual('123');
    });
    test('should return empty', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginPassword(state as StateScheme)).toEqual('');
    });
});
