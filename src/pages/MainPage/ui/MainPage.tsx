import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups/components/ListBox/ListBox';

const MainPage = memo(() => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;
