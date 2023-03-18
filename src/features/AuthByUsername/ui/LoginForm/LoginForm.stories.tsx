import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [storeDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [storeDecorator({
    loginForm: { username: '123', password: '123', error: 'Error' },
})];

export const withLoading = Template.bind({});
withLoading.args = {};
withLoading.decorators = [storeDecorator({
    loginForm: { username: '123', password: '123', isLoading: true },
})];
