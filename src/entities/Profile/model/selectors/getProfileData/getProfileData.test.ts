import { StateScheme } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should return counter value', () => {
        const data = {
            username: 'admin',
            lastname: 'adminovich',
            age: 22,
            country: Country.USA,
            first: 'yar',
            city: 'Austin',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateScheme> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateScheme)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileData(state as StateScheme)).toEqual(undefined);
    });
});
