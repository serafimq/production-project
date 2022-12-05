import { addDecorator } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { themesDecorator } from '../../src/shared/config/storybook/ThemesDecorator/ThemesDecorator';
import { routerDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(styleDecorator);
addDecorator(themesDecorator(Theme.LIGHT));
addDecorator(routerDecorator);
