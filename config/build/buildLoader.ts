import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoader({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // loader для импорта svg
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/, // исключаем ноде модули
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
                ],
            },
        },
    };

    const cssLoader = buildCssLoader(isDev);

    // если бы писали на js, то пришлось бы еще добавить babel-loader для
    // возможности писать jsx, а так хватает и ts-скриптового
    const typescriptLoader = {
        test: /\.tsx?$/, // расширения файлов, которые будут проходить через loader => ts / tsx
        use: 'ts-loader', // loader для этих файлов
        exclude: /node_modules/, // исключаем ноде модули
    };

    // loader для картинок
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [ // лоадеры, котоыре обрабатывают файлы, которые выходят за рамки js =>
        // => jpeg, gif, scss, css, ts, svg ...
        // порядок, в котором лоудеры возвращаютс, имеет значение
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
