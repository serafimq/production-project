import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemesDecorator } from '@/shared/config/storybook/ThemesDecorator/ThemesDecorator';
import AboutPage from './AboutPage';

export default {
    title: 'pages/AdminPanelPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

// @ts-ignore
const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemesDecorator(Theme.DARK)];
