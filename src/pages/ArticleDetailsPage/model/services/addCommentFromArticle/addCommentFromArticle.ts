import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const AddCommentFromArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetails/AddCommentFromArticle', async (text, thunkApi) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkApi;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue('no data');
    }
    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
        });
        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
