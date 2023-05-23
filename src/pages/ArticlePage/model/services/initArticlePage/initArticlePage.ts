import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from 'pages/ArticlePage/model/selectors/articlesPageSelector';
import { articlesPageActions } from 'pages/ArticlePage/model/slices/articlePageSlice';
import {
    fetchArticlesList,
} from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';

export const initArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlePage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },
    );
