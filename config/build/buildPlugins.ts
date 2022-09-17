import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [ // добавляем разные плагины
        new HtmlWebpackPlugin({ // плагин для HTML сборки и подключение к нему js
            template: paths.html
        }),
        new webpack.ProgressPlugin(), // плагин для отслеживания процесса сборки
        new MiniCssExtractPlugin({ // плагин для css module
            filename: 'css/[name].[contenthash:8].css', // хэшируем файлы css
            chunkFilename: 'css/[name].[contenthash:8].css', // хэшируем файлы css
        })
    ]
}
