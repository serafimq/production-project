import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((
    {
        className,
        value,
        readonly,
        onChange,
    }: CurrencySelectProps,
) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            className={classNames('', {}, [className])}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            items={options}
            readonly={readonly}
            direction="top right"
        />
    );
});
