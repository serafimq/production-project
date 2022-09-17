import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoader({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i, // расширения файлов, которые будут проходить через loader => ts / tsx
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // create style nodes from js strings
            {
                loader: 'css-loader', // translates css into commonjs
                options: {
                    modules: { // возможность использовать модули
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },
            'sass-loader', // compiles sass to css

        ], // loader для этих файлов
    }

    // если бы писали на js, то пришлось бы еще добавить babel-loader для возможности писать jsx, а так хватает и ts-скриптового
    const typescriptLoader = {
        test: /\.tsx?$/, // расширения файлов, которые будут проходить через loader => ts / tsx
        use: 'ts-loader', // loader для этих файлов
        exclude: /node_modules/, // исключаем ноде модули
    }

    return [ // лоадеры, котоыре обрабатывают файлы, которые выходят за рамки js => jpeg, gif, scss, css, ts, svg ...
        // порядок, в котором лоудеры возвращаютс, имеет значение
        typescriptLoader,
        cssLoader,
    ]
}
