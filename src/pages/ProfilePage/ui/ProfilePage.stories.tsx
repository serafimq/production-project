import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemesDecorator } from 'shared/config/storybook/ThemesDecorator/ThemesDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

// @ts-ignore
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            lastname: 'adminovich',
            age: 22,
            country: Country.USA,
            first: 'yar',
            city: 'Austin',
            currency: Currency.USD,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemesDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            lastname: 'adminovich',
            age: 22,
            country: Country.USA,
            first: 'yar',
            city: 'Austin',
            currency: Currency.USD,
        },
    },
})];
