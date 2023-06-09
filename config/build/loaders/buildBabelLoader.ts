import { BuildOptions } from '../types/config';

interface BuildLoaderProps extends BuildOptions {
    isTsx: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildLoaderProps) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                    [
                        '@babel/plugin-transform-typescript',
                        { isTsx },
                    ],
                    '@babel/plugin-transform-runtime',
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
