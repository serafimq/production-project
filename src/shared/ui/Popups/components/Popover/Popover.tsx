import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { ReactNode } from 'react';
import { mapDirectionClass } from 'shared/ui/Popups/styles/const';
import { classNames } from 'shared/lib/classNames/classNames';
import popupCls from '../../styles/popups.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children?: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {
        className, direction = 'bottom left', trigger, children,
    } = props;
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames('', {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
