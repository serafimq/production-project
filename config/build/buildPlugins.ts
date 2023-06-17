import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins(
    {
        paths, isDev, apiUrl, project,
    }: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;
    const plugins = [
        new HtmlWebpackPlugin({ // плагин для HTML сборки и подключение к нему js
            template: paths.html,
        }),
        new webpack.ProgressPlugin(), // плагин для отслеживания процесса сборки
        new webpack.DefinePlugin({ // возможность добавлять глобальные переменные
            __IS_DEV__: JSON.stringify(isDev), // глобальная переенная dev или prod
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
    ];
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin()); // hot loader
        plugins.push(new webpack.HotModuleReplacementPlugin());
        // plugin для анализа бандлов в приложении
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
    }
    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({ // плагин для css module
                filename: 'css/[name].[contenthash:8].css', // хэшируем файлы css
                chunkFilename: 'css/[name].[contenthash:8].css', // хэшируем файлы css
            }),
        );
        plugins.push(
            new CopyPlugin({
                patterns: [
                    {
                        from: paths.locales,
                        to: paths.buildLocales,
                    },
                ],
            }),
        );
    }

    return plugins;
}
