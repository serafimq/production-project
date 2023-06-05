import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popups.module.scss';
import { mapDirectionClass } from '../../styles/const';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
    const {
        className, items, trigger, direction = 'top right',
    } = props;
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames('', {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {
                    items.map((item: DropdownItem) => {
                        const content = ({ active }: {active: boolean}) => (
                            <button
                                type="button"
                                onClick={item.onClick}
                                disabled={item.disabled}
                                className={classNames(
                                    cls.item,
                                    { [popupCls.active]: active },
                                    [],
                                )}
                            >
                                {item.content}
                            </button>
                        );
                        if (item.href) {
                            return (
                                <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                    {content}
                                </Menu.Item>
                            );
                        }
                        return (
                            <Menu.Item as={Fragment} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    })
                }
            </Menu.Items>
        </Menu>
    );
}
