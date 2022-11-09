import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoader } from './buildLoader';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: { // настройка куда будем делать сборку нашего приложения
            filename: '[name].[contenthash].js', // название файла, [name - можно настроить в entry], [contenthash] - добавляет хэши для сборки,чтобы браузеры не кешироваил файлы
            path: paths.build,
            clean: true, // чистит build после новой сборки
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoader(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined, // сурсмап помогает отслеживать ошибки в сбилженом прилоежнии, отключаем если это продакшен мод
        devServer: isDev ? buildDevServer(options) : undefined,
        // подключаем дев сервер, отключаем если это продакшен мод
    };
}
