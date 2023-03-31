import { StateScheme } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateScheme> = {
            profile: { validateError: [ValidateProfileError.SERVER_ERROR] },
        };
        expect(getProfileValidateErrors(state as StateScheme)).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileValidateErrors(state as StateScheme)).toEqual(undefined);
    });
});
