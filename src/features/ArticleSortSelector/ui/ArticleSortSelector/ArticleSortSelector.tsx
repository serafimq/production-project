import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(
    ({
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    }: ArticleSortSelectorProps) => {
        const { t } = useTranslation();
        const orderOptions = useMemo<SelectOption<SortOrder>[]>(
            () => [
                {
                    content: t('возрастанию'),
                    value: 'asc',
                },
                {
                    content: t('убыванию'),
                    value: 'desc',
                },
            ],
            [t],
        );

        const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(
            () => [
                {
                    content: t('дате создания'),
                    value: ArticleSortField.CREATED,
                },
                {
                    content: t('наименованию'),
                    value: ArticleSortField.TITLE,
                },
                {
                    content: t('количеству просмотров'),
                    value: ArticleSortField.VIEWS,
                },
            ],
            [t],
        );

        return (
            <div
                className={classNames(cls.ArticleSortSelector, {}, [className])}
            >
                <Select
                    options={sortOptions}
                    label={t('Сортировать ПО')}
                    value={sort}
                    onChange={onChangeSort}
                />
                <Select
                    options={orderOptions}
                    label={t('по')}
                    value={order}
                    onChange={onChangeOrder}
                    className={cls.order}
                />
            </div>
        );
    },
);
