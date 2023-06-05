import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    ArticleListItemSkeleton,
} from '@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            className={cls.card}
            key={index}
            view={view}
        />
    ));

export const ArticleList = memo(({
    className, articles, isLoading, view = ArticleView.SMALL, target,
}: ArticleListProps) => {
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            article={article}
            view={view}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Такой статьи не существует')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});
