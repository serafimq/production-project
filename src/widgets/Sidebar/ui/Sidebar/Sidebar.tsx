import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            className={
                classNames(
                    cls.Sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <Button onClick={onToggle}>
                {t('Переключить')}
            </Button>
            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher className={cls.lang} />
            </div>
        </div>
    );
};