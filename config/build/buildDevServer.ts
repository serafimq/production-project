import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port, // порт по которому находится DevServer
        open: true, // открывать браузер при запуске сервера
        historyApiFallback: true, // при перезагрузке страницы, которая не является /, чтоб не выдавало ошибку
    }
}
