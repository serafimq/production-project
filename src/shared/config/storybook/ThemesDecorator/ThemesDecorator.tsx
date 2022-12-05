import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const themesDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
