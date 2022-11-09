import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port, // порт по которому находится DevServer
        open: true, // открывать браузер при запуске сервера
        historyApiFallback: true,
        // при перезагрузке страницы, которая не является /, чтоб не выдавало ошибку
        hot: true,
        // при изменении чего-ли перезагрузка страницы не нужна для отображение этого на странице
    };
}
