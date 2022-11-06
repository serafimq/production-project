import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // расширения тех файлов, которые мы не будем указывать при импорте
        preferAbsolute: true, // дает возможность импортировать файлы с абсалютными путями
        modules: [options.paths.src, 'node_modules'],// указываем путь до папки
        mainFiles: ['index'], //для каждого модуля главным файлом является index
        alias: {},
    }
}
