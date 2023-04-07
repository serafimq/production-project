import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage = ({ className }: ArticlePageProps) => (
    <div className={classNames('', {}, [className])} />
);

export default memo(ArticlePage);
