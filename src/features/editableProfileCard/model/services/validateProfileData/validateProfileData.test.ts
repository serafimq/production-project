import axios from 'axios';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

jest.mock('axios');

const data = {
    username: 'admin',
    lastname: 'adminovich',
    age: 22,
    country: Country.USA,
    first: 'yar',
    city: 'Austin',
    currency: Currency.USD,
};

const mockedAxios = jest.mocked(axios, true);
describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = ValidateProfileData(data);

        expect(result).toEqual([]);
    });
    test('without first and lastname', async () => {
        const result = ValidateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('incorrect age', async () => {
        const result = ValidateProfileData({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('without country', async () => {
        const result = ValidateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
});
