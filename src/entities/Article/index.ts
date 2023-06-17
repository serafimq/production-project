export { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { articleDetailsSlice } from './model/slice/articleDetailsSlice';
export { ArticleList } from './ui/ArticleList/ArticleList';
export {
    ArticleSortField, ArticleView, ArticleType, ArticleBlockType,
} from './model/consts/consts';
