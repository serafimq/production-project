import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlePageFilter } from './ArticlePageFilter';

export default {
    title: 'pages/Article/ArticlePageFilter',
    component: ArticlePageFilter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageFilter>;

const Template: ComponentStory<typeof ArticlePageFilter> = (args) => (
    <ArticlePageFilter {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
