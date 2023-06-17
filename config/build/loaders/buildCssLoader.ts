import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i, // расширения файлов, которые будут проходить через loader => ts / tsx
        exclude: /node_modules/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // create style nodes from js strings
            {
                loader: 'css-loader', // translates css into commonjs
                options: {
                    modules: { // возможность использовать модули
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader', // compiles sass to css

        ], // loader для этих файлов
    };
}
