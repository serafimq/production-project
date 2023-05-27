import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface listBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props: listBoxProps) {
    const {
        items, className, value, defaultValue, onChange, readonly, direction = 'bottom', label,
    } = props;

    const optionClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListbox.Button
                    disabled={readonly}
                    className={cls.trigger}
                >
                    <Button
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, optionClasses)}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={
                                        classNames(
                                            cls.item,
                                            {
                                                [cls.active]: active,
                                                [cls.disabled]: item.disabled,
                                            },
                                        )
                                    }
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
}
