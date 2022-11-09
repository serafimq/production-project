import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [ // добавляем разные плагины
        new HtmlWebpackPlugin({ // плагин для HTML сборки и подключение к нему js
            template: paths.html,
        }),
        new webpack.ProgressPlugin(), // плагин для отслеживания процесса сборки
        new MiniCssExtractPlugin({ // плагин для css module
            filename: 'css/[name].[contenthash:8].css', // хэшируем файлы css
            chunkFilename: 'css/[name].[contenthash:8].css', // хэшируем файлы css
        }),
        new webpack.DefinePlugin({ // возможность добавлять глобальные переменные
            __IS_DEV__: JSON.stringify(isDev), // глобальная переенная dev или prod
        }),
        new webpack.HotModuleReplacementPlugin(),
    ];
}
