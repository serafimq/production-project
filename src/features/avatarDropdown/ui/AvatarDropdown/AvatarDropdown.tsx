import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable
                    ? [{
                        content: t('Админ панель'),
                        href: RoutePath.admin_panel,
                    }] : []),
                {
                    content: t('Профиль пользователя'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});
