import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left',
}

interface TextProps {
    className?: string;
    title?: string
    text?: string
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo(({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
}: TextProps) => {
    const { t } = useTranslation();
    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };
    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (<p className={cls.title}>{title}</p>)}
            {text && (<p className={cls.text}>{text}</p>)}
        </div>
    );
});
