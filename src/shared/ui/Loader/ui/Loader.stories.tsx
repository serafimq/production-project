import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemesDecorator } from '@/shared/config/storybook/ThemesDecorator/ThemesDecorator';
import { Loader } from './Loader';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemesDecorator(Theme.DARK)];
