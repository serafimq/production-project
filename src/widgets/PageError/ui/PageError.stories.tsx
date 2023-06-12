import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemesDecorator } from '@/shared/config/storybook/ThemesDecorator/ThemesDecorator';
import { PageError } from './PageError';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemesDecorator(Theme.DARK)];
