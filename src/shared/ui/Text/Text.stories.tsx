import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemesDecorator } from '@/shared/config/storybook/ThemesDecorator/ThemesDecorator';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title',
    text: 'text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'title',
    text: 'text',
    theme: TextTheme.ERROR,
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'text',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'title',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'title',
    text: 'text',
};
PrimaryDark.decorators = [ThemesDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'text',
};
onlyTextDark.decorators = [ThemesDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'title',
};
onlyTitleDark.decorators = [ThemesDecorator(Theme.DARK)];

export const PrimaryM = Template.bind({});
PrimaryM.args = {
    title: 'title',
    text: 'text',
    size: TextSize.M,
};

export const PrimaryL = Template.bind({});
PrimaryM.args = {
    title: 'title',
    text: 'text',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'title',
    text: 'text',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'title',
    text: 'text',
    size: TextSize.S,
};
