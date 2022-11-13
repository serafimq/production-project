import path from 'path'; // модуль путей для nodejs
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => { // передаем env из package.json
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'), // стартовая точка нашего приложения
        build: path.resolve(__dirname, 'build'), // название папки, куда собирается билд
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'), // путь до папки src, для относительный импортов
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode, // мод development или production
        paths,
        isDev, // режим работы dev
        port: PORT, // порт для запуска devServera

    });

    return config;
};
