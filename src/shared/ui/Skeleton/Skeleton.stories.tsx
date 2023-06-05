import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemesDecorator } from '@/shared/config/storybook/ThemesDecorator/ThemesDecorator';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const Dark = Template.bind({});
Dark.args = {
    width: '100%',
    height: 200,
};
Dark.decorators = [ThemesDecorator(Theme.DARK)];

export const DarkCircle = Template.bind({});
DarkCircle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
DarkCircle.decorators = [ThemesDecorator(Theme.DARK)];
