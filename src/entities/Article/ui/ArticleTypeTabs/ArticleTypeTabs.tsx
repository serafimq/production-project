import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((
    {
        className,
        value,
        onChangeType,
    }: ArticleTypeTabsProps,
) => {
    const { t } = useTranslation();

    const tabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Показать всё'),
        },
        {
            value: ArticleType.IT,
            content: t('АйТи'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
    ], [t]);

    const onClickTab = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={tabs}
            value={value}
            onTabClick={onClickTab}
            className={classNames('', {}, [className])}
        />
    );
});
