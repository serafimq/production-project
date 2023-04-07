import { StateScheme } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from 'entities/Article/model/selectors/articleDetails';

describe('getArticleDetailsData.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitles',
        };
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateScheme)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleDetailsData(state as StateScheme)).toEqual(undefined);
    });

    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateScheme)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleDetailsError(state as StateScheme)).toEqual(undefined);
    });

    test('should return isLoading true', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateScheme)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleDetailsIsLoading(state as StateScheme)).toEqual(false);
    });
});
