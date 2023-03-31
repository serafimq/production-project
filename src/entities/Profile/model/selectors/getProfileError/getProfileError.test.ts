import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateScheme> = {
            profile: { error: 'true' },
        };
        expect(getProfileError(state as StateScheme)).toEqual('true');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileError(state as StateScheme)).toEqual(undefined);
    });
});
