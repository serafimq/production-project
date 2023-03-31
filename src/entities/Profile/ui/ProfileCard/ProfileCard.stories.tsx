import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        lastname: 'adminovich',
        age: 22,
        country: Country.USA,
        first: 'yar',
        city: 'Austin',
        currency: Currency.USD,
        avatar,
    },
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};

export const isError = Template.bind({});
isError.args = {
    error: 'error',
};
